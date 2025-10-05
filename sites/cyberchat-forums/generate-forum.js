#!/usr/bin/env node

/**
 * CyberChat Forums Generator
 * Builds static HTML forum pages from templates and config data
 */

const fs = require('fs');
const path = require('path');

// Load configuration
const { FORUM_CONFIG, USERS, THREADS } = require('./config.js');

// Template cache
let templates = {};

/**
 * Load template file
 */
function loadTemplate(templateName) {
    if (!templates[templateName]) {
        const templatePath = path.join(__dirname, `template-${templateName}.html`);
        templates[templateName] = fs.readFileSync(templatePath, 'utf8');
    }
    return templates[templateName];
}

/**
 * Replace template variables
 */
function replaceVars(template, vars) {
    let result = template;
    for (const [key, value] of Object.entries(vars)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        result = result.replace(regex, value);
    }
    return result;
}

/**
 * Get user rank based on post count
 */
function getUserRank(postCount) {
    for (let i = FORUM_CONFIG.ranks.length - 1; i >= 0; i--) {
        const rank = FORUM_CONFIG.ranks[i];
        if (postCount >= rank.minPosts) {
            return rank;
        }
    }
    return FORUM_CONFIG.ranks[0]; // Newbie
}

/**
 * Generate rank pips (stars)
 */
function generatePips(count, color) {
    let pips = '';
    for (let i = 0; i < count; i++) {
        pips += `<span class="pip" style="background-color: ${color};"></span> `;
    }
    return pips;
}

/**
 * Format number with commas
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Generate random online users list
 */
function generateOnlineUsers() {
    const onlineUserIds = [
        'techmaster99', 'gamegod', 'webwizard', 'animelover2000',
        'momof3', 'napsterking', 'codemonkey', 'poketrainer99',
        'retrogamer', 'xxdarkangelxx'
    ];

    return onlineUserIds
        .map(id => `<a href="#">${USERS[id].displayName}</a>`)
        .join(', ');
}

/**
 * Generate forum index page
 */
function generateIndex() {
    console.log('Generating forum index...');

    const template = loadTemplate('index');

    // Generate categories HTML
    let categoriesHTML = '';

    for (const category of FORUM_CONFIG.categories) {
        // Category header
        categoriesHTML += `
<table width="100%" class="forumindex">
<tr class="category-header">
<td colspan="5">${category.name}</td>
</tr>
<tr class="forumindex-header">
<td width="40">&nbsp;</td>
<td>Forum</td>
<td width="80" align="center">Threads</td>
<td width="80" align="center">Posts</td>
<td width="200">Last Post</td>
</tr>
`;

        // Board rows
        for (let i = 0; i < category.boards.length; i++) {
            const board = category.boards[i];
            const rowClass = (i % 2 === 0) ? 'forum-row' : 'forum-row-alt';

            // Generate moderators list
            const modList = board.moderators.length > 0
                ? board.moderators.map(modId => {
                    const user = USERS[modId];
                    if (!user) {
                        console.warn(`Warning: User '${modId}' not found in USERS`);
                        return modId; // Fallback to ID
                    }
                    return `<a href="#">${user.displayName}</a>`;
                }).join(', ')
                : '<i>None</i>';

            categoriesHTML += `
<tr class="${rowClass}">
<td class="forum-icon">
<span class="icon icon-new">📁</span>
</td>
<td class="forum-info">
<div class="forum-title"><a href="boards/${board.id}/index.html">${board.name}</a></div>
<div class="forum-description">${board.description}</div>
<div class="forum-moderators">Moderators: ${modList}</div>
</td>
<td class="forum-stats">${formatNumber(board.threads)}</td>
<td class="forum-stats">${formatNumber(board.posts)}</td>
<td class="forum-lastpost">
<font size="1">
Dec 29, 1999 11:23 PM<br>
by <a href="#">User</a>
</font>
</td>
</tr>
`;
        }

        categoriesHTML += '</table><div class="spacer"></div>\n';
    }

    // Generate recent activity (placeholder)
    const recentActivity = `
<font size="1">
• <a href="#">TechMaster99</a> replied to <a href="#">"Windows 98 won't boot!"</a> in Tech Support<br>
• <a href="#">AnimeLover2000</a> started <a href="#">"Best anime of 1999?"</a> in Anime & Manga<br>
• <a href="#">GameGod</a> replied to <a href="#">"Dreamcast is AMAZING"</a> in Console Gaming<br>
• <a href="#">FlameKing</a> replied to <a href="#">"This forum is dying"</a> in Off Topic<br>
• <a href="#">MomOf3</a> started <a href="#">"How do I change my avatar?"</a> in Help Desk<br>
</font>
`;

    // Birthdays (placeholder)
    const birthdays = `
<font size="1">
Today's Birthdays: <a href="#">CoolUser99</a> (23), <a href="#">GamerGirl</a> (19)<br>
Upcoming: <a href="#">TechGuru</a> (Tomorrow)
</font>
`;

    // Replace variables
    const vars = {
        FORUM_NAME: FORUM_CONFIG.name,
        TAGLINE: FORUM_CONFIG.tagline,
        FOUNDED: FORUM_CONFIG.founded,
        VERSION: FORUM_CONFIG.version,
        ONLINE_COUNT: FORUM_CONFIG.stats.currentOnline,
        ONLINE_MEMBERS: Math.floor(FORUM_CONFIG.stats.currentOnline * 0.4),
        ONLINE_GUESTS: Math.floor(FORUM_CONFIG.stats.currentOnline * 0.6),
        MOST_ONLINE_COUNT: FORUM_CONFIG.stats.mostOnline.count,
        MOST_ONLINE_DATE: FORUM_CONFIG.stats.mostOnline.date,
        ONLINE_USERS: generateOnlineUsers(),
        TOTAL_POSTS: formatNumber(FORUM_CONFIG.stats.totalPosts),
        TOTAL_THREADS: formatNumber(FORUM_CONFIG.stats.totalThreads),
        TOTAL_MEMBERS: formatNumber(FORUM_CONFIG.stats.totalMembers),
        NEWEST_MEMBER: FORUM_CONFIG.stats.newestMember,
        CATEGORIES: categoriesHTML,
        RECENT_ACTIVITY: recentActivity,
        BIRTHDAYS: birthdays
    };

    const html = replaceVars(template, vars);

    // Write file
    fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
    console.log('✅ Generated: index.html');
}

/**
 * Generate board directory structure
 */
function createBoardDirectories() {
    console.log('\nCreating board directories...');

    const boardsDir = path.join(__dirname, 'boards');
    if (!fs.existsSync(boardsDir)) {
        fs.mkdirSync(boardsDir);
    }

    const threadsDir = path.join(__dirname, 'threads');
    if (!fs.existsSync(threadsDir)) {
        fs.mkdirSync(threadsDir);
    }

    for (const category of FORUM_CONFIG.categories) {
        for (const board of category.boards) {
            const boardPath = path.join(boardsDir, board.id);
            if (!fs.existsSync(boardPath)) {
                fs.mkdirSync(boardPath);
                console.log(`  Created: boards/${board.id}/`);
            }

            const threadPath = path.join(threadsDir, board.id);
            if (!fs.existsSync(threadPath)) {
                fs.mkdirSync(threadPath);
                console.log(`  Created: threads/${board.id}/`);
            }
        }
    }
}

/**
 * Generate a board page (thread listing)
 */
function generateBoard(category, board) {
    const template = loadTemplate('board');

    // Generate moderators list
    const modList = board.moderators.length > 0
        ? board.moderators.map(modId => {
            const user = USERS[modId];
            if (!user) {
                console.warn(`Warning: User '${modId}' not found in USERS`);
                return modId; // Fallback to ID
            }
            return `<a href="#">${user.displayName}</a>`;
        }).join(', ')
        : '<i>None</i>';

    // Load threads for this board
    const boardThreads = THREADS[board.id] || [];

    // Generate thread list from real data
    let threadsHTML = '';
    for (let i = 0; i < boardThreads.length; i++) {
        const thread = boardThreads[i];
        const rowClass = thread.sticky ? 'thread-sticky' : (i % 2 === 0 ? 'thread-row' : 'thread-row-alt');

        // Determine icon
        let icon = '💬';
        let iconClass = 'icon-new';
        if (thread.sticky) {
            icon = '📌';
            iconClass = 'icon-sticky';
        } else if (thread.hot) {
            icon = '🔥';
            iconClass = 'icon-hot';
        } else if (thread.locked) {
            icon = '🔒';
            iconClass = 'icon-locked';
        }

        // Get author display name
        const author = USERS[thread.author];
        const authorName = author ? author.displayName : thread.author;

        // Get last poster display name
        const lastPoster = USERS[thread.lastPost.user];
        const lastPosterName = lastPoster ? lastPoster.displayName : thread.lastPost.user;

        threadsHTML += `
<tr class="${rowClass}">
<td class="thread-icon"><span class="icon ${iconClass}">${icon}</span></td>
<td class="thread-title">
<a href="#">${thread.title}</a><br>
<span class="thread-starter">by <a href="#">${authorName}</a></span>
</td>
<td class="thread-stats">${thread.replies}</td>
<td class="thread-stats">${formatNumber(thread.views)}</td>
<td class="thread-lastpost">
<font size="1">
${thread.lastPost.date}<br>
by <a href="#">${lastPosterName}</a>
</font>
</td>
</tr>
`;
    }

    // Generate jump menu
    let jumpMenu = '';
    for (const cat of FORUM_CONFIG.categories) {
        jumpMenu += `<option value="" disabled>--- ${cat.name} ---</option>\n`;
        for (const b of cat.boards) {
            const selected = b.id === board.id ? 'selected' : '';
            jumpMenu += `<option value="../${b.id}/index.html" ${selected}>${b.name}</option>\n`;
        }
    }

    // Pagination (placeholder)
    const pagination = '<span class="current">1</span> <a href="#">2</a> <a href="#">3</a> ... <a href="#">15</a>';

    const vars = {
        FORUM_NAME: FORUM_CONFIG.name,
        TAGLINE: FORUM_CONFIG.tagline,
        VERSION: FORUM_CONFIG.version,
        BOARD_NAME: board.name,
        BOARD_ID: board.id,
        BOARD_DESCRIPTION: board.description,
        MODERATORS: modList,
        THREADS: threadsHTML,
        PAGINATION: pagination,
        JUMP_MENU: jumpMenu
    };

    const html = replaceVars(template, vars);

    // Write file
    const boardPath = path.join(__dirname, 'boards', board.id, 'index.html');
    fs.writeFileSync(boardPath, html, 'utf8');
    console.log(`  ✅ Generated: boards/${board.id}/index.html`);
}

/**
 * Generate all board pages
 */
function generateAllBoards() {
    console.log('\nGenerating board pages...');

    for (const category of FORUM_CONFIG.categories) {
        console.log(`\n${category.name}:`);
        for (const board of category.boards) {
            generateBoard(category, board);
        }
    }
}

/**
 * Main execution
 */
function main() {
    console.log('🔧 CyberChat Forums Generator');
    console.log('================================\n');

    console.log('Phase 1: Scaffolding & Framework');
    console.log('---------------------------------');

    // Generate main index
    generateIndex();

    // Create directory structure
    createBoardDirectories();

    // Generate all boards
    generateAllBoards();

    console.log('\n✨ Phase 1 Complete!');
    console.log('\n📊 Summary:');
    console.log(`   Forum Index: 1`);
    console.log(`   Categories: ${FORUM_CONFIG.categories.length}`);

    let totalBoards = 0;
    for (const category of FORUM_CONFIG.categories) {
        totalBoards += category.boards.length;
    }
    console.log(`   Boards: ${totalBoards}`);
    console.log(`   Users Configured: ${Object.keys(USERS).length}`);

    console.log('\n🎯 Next Steps:');
    console.log('   1. Review generated pages');
    console.log('   2. Test navigation');
    console.log('   3. Proceed to Phase 2: Create thread content');
    console.log('   4. Run: node generate-forum.js --phase2');
}

// Run generator
if (require.main === module) {
    main();
}

module.exports = {
    generateIndex,
    generateBoard,
    generateAllBoards
};
