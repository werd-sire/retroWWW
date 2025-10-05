#!/usr/bin/env node

/**
 * CyberChat Forums Generator
 * Builds static HTML forum pages from templates and config data
 */

const fs = require('fs');
const path = require('path');

// Load configuration
const { FORUM_CONFIG, USERS, THREADS } = require('./config.js');
const { THREAD_POSTS } = require('./thread-content.js');

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

    // Generate news ticker
    const newsTicker = `Welcome to CyberChat Forums! |
Y2K is almost here - are you ready? |
New: Anime & Manga board is VERY active! |
Remember: Be respectful to all members |
Check out our <a href="#">Forum Rules</a> |
Having trouble? Visit the <a href="boards/help-desk/index.html">Help Desk</a>`;

    // Generate recent activity from actual threads
    const recentActivity = `
<font size="1">
• <a href="#">GameGod</a> replied to <a href="threads/general-discussion/2.html">"Y2K Countdown Thread - WHO'S STAYING UP?!"</a> in General Discussion<br>
• <a href="#">MomOf3</a> replied to <a href="threads/tech-support/13.html">"HELP!! Windows 98 won't boot after installing RealPlayer!"</a> in Tech Support<br>
• <a href="#">OtakuMaster</a> replied to <a href="threads/anime-manga/50.html">"Cowboy Bebop is a MASTERPIECE"</a> in Anime & Manga<br>
• <a href="#">MovieBuff</a> started <a href="threads/movies-tv/45.html">"The Matrix changed cinema forever"</a> in Movies & TV<br>
• <a href="#">Phoenix_Rising</a> replied to <a href="threads/off-topic/9.html">"This forum is dying"</a> in Off Topic<br>
• <a href="#">FragMaster</a> started <a href="threads/pc-gaming/38.html">"Unreal Tournament vs Quake III - THE ULTIMATE SHOWDOWN"</a> in PC Gaming<br>
• <a href="#">NewBuilder99</a> started <a href="threads/hardware/17.html">"Building my first PC - need advice!"</a> in Hardware<br>
• <a href="#">ConsoleKid</a> started <a href="threads/console-gaming/40.html">"Nintendo 64 vs PlayStation - which won the generation?"</a> in Console Gaming<br>
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
        NEWS_TICKER: newsTicker,
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
 * Generate a single post HTML
 */
function generatePost(postData, postNumber) {
    const user = USERS[postData.user];
    if (!user) {
        console.warn(`Warning: User '${postData.user}' not found`);
        return '';
    }

    const rank = getUserRank(user.postCount);
    const pips = generatePips(rank.pips, rank.color);
    const rankName = user.customRank || rank.name;

    // User badge
    let badge = '';
    if (user.isAdmin) {
        badge = '<span class="user-badge badge-admin">ADMIN</span>';
    } else if (user.isMod && user.isMod.length > 0) {
        badge = '<span class="user-badge badge-mod">MOD</span>';
    }

    // Online status (randomize for realism)
    const isOnline = Math.random() > 0.3;
    const onlineIndicator = isOnline ? '<span class="user-online">●</span> ' : '<span class="user-offline">○</span> ';

    // Format post content (preserve line breaks)
    let content = postData.content
        .split('\n')
        .map(line => line.trim() === '' ? '<br>' : line)
        .join('\n');

    // Add edit notice if edited
    let editNotice = '';
    if (postData.editedBy) {
        const editedByUser = USERS[postData.editedBy];
        const editorName = editedByUser ? editedByUser.displayName : postData.editedBy;
        editNotice = `<div class="post-edited"><i>Last edited by <b>${editorName}</b> on ${postData.editedDate}</i></div>`;
        if (postData.editNote) {
            editNotice += `<div class="post-edit-note">${postData.editNote}</div>`;
        }
    }

    return `
<table width="100%" border="0" cellpadding="8" cellspacing="0" class="post">
<tr>
<td width="150" valign="top" class="post-author">
    <div class="post-username">${onlineIndicator}<a href="#"><b>${user.displayName}</b></a> ${badge}</div>
    <div class="post-avatar">${user.avatar ? `<img src="${user.avatar}" width="80" height="80" alt="avatar">` : ''}</div>
    <div class="post-rank">${rankName}</div>
    <div class="post-pips">${pips}</div>
    <div class="post-info">
        <font size="1">
        Posts: ${formatNumber(user.postCount)}<br>
        Joined: ${user.joined}<br>
        ${user.location ? `Location: ${user.location}<br>` : ''}
        </font>
    </div>
</td>
<td valign="top" class="post-content">
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="post-date"><font size="1">Posted: ${postData.date}</font></td>
        <td align="right" class="post-number"><font size="1">#${postNumber}</font></td>
    </tr>
    </table>
    <div class="post-body">
${content}
    </div>
    ${editNotice}
    ${user.signature ? `<div class="post-signature">${user.signature}</div>` : ''}
</td>
</tr>
</table>
`;
}

/**
 * Generate a thread page
 */
function generateThread(boardId, thread) {
    const template = loadTemplate('thread');

    // Get board info
    let boardName = '';
    for (const category of FORUM_CONFIG.categories) {
        const board = category.boards.find(b => b.id === boardId);
        if (board) {
            boardName = board.name;
            break;
        }
    }

    // Get posts for this thread
    const posts = THREAD_POSTS[thread.id] || [];

    if (posts.length === 0) {
        console.warn(`  Warning: No posts found for thread ${thread.id}`);
        return;
    }

    // Generate posts HTML
    let postsHTML = '';
    for (let i = 0; i < posts.length; i++) {
        postsHTML += generatePost(posts[i], i + 1);
    }

    // Pagination
    const pagination = '<span class="current">1</span>';

    const vars = {
        FORUM_NAME: FORUM_CONFIG.name,
        TAGLINE: FORUM_CONFIG.tagline,
        VERSION: FORUM_CONFIG.version,
        BOARD_ID: boardId,
        BOARD_NAME: boardName,
        THREAD_TITLE: thread.title,
        THREAD_ID: thread.id,
        POSTS: postsHTML,
        PAGINATION: pagination
    };

    const html = replaceVars(template, vars);

    // Write file
    const threadPath = path.join(__dirname, 'threads', boardId, `${thread.id}.html`);
    fs.writeFileSync(threadPath, html, 'utf8');
    console.log(`    ✅ Generated: threads/${boardId}/${thread.id}.html`);
}

/**
 * Generate all threads with content
 */
function generateAllThreads() {
    console.log('\nGenerating thread pages with content...');

    let generatedCount = 0;

    for (const [boardId, threadList] of Object.entries(THREADS)) {
        console.log(`\n${boardId}:`);

        for (const thread of threadList) {
            if (THREAD_POSTS[thread.id]) {
                generateThread(boardId, thread);
                generatedCount++;
            }
        }
    }

    console.log(`\n✅ Generated ${generatedCount} thread pages with content`);
}

/**
 * Update board pages to link to actual threads
 */
function updateBoardLinksToThreads() {
    console.log('\nUpdating board pages to link to actual threads...');

    for (const category of FORUM_CONFIG.categories) {
        for (const board of category.boards) {
            const boardPath = path.join(__dirname, 'boards', board.id, 'index.html');
            let html = fs.readFileSync(boardPath, 'utf8');

            // Get threads for this board
            const boardThreads = THREADS[board.id] || [];

            // Replace thread links
            for (const thread of boardThreads) {
                if (THREAD_POSTS[thread.id]) {
                    // Replace the # placeholder with actual thread link
                    const oldLink = `<a href="#">${thread.title}</a>`;
                    const newLink = `<a href="../../threads/${board.id}/${thread.id}.html">${thread.title}</a>`;
                    html = html.replace(oldLink, newLink);
                }
            }

            fs.writeFileSync(boardPath, html, 'utf8');
            console.log(`  ✅ Updated: boards/${board.id}/index.html`);
        }
    }
}

/**
 * Generate user profile page
 */
function generateUserProfile(userId, user) {
    const template = loadTemplate('profile');

    const rank = getUserRank(user.postCount);
    const rankName = user.customRank || rank.name;
    const pips = generatePips(rank.pips, rank.color);

    // User status badge
    let userStatus = '';
    if (user.isAdmin) {
        userStatus = '<span class="user-badge badge-admin">ADMINISTRATOR</span>';
    } else if (user.isMod && user.isMod.length > 0) {
        userStatus = `<span class="user-badge badge-mod">MODERATOR</span><br><font size="1">Moderates: ${user.isMod.join(', ')}</font>`;
    } else if (user.banned) {
        userStatus = '<span class="user-badge badge-banned">BANNED</span>';
    }

    // Avatar
    const avatar = user.avatar
        ? `<img src="${user.avatar}" width="120" height="120" border="1" alt="avatar">`
        : '<img src="../../assets/avatars/default.gif" width="120" height="120" border="1" alt="no avatar">';

    // Personal Info
    let personalInfo = '';
    if (user.location) personalInfo += `<b>Location:</b> ${user.location}<br>`;
    if (user.interests) personalInfo += `<b>Interests:</b> ${user.interests}<br>`;
    if (user.occupation) personalInfo += `<b>Occupation:</b> ${user.occupation}<br>`;
    if (!personalInfo) personalInfo = '<i>No information provided</i>';

    // Warnings
    let warnings = '';
    if (user.warnings && user.warnings > 0) {
        warnings = `<b style="color: #CC0000;">Warnings:</b> ${user.warnings}<br>`;
    }
    if (user.banned) {
        warnings += `<b style="color: #CC0000;">Banned:</b> ${user.bannedDate}<br>`;
        warnings += `<b>Reason:</b> ${user.bannedReason}<br>`;
    }

    // Website link
    let websiteLink = '';
    if (user.website) {
        websiteLink = `<a href="${user.website}" target="_blank">Visit ${user.displayName}'s Website</a><br>`;
    }

    // Last visit (randomize for realism)
    const lastVisit = 'Dec 29, 1999 11:' + Math.floor(Math.random() * 60) + ' PM';

    const vars = {
        FORUM_NAME: FORUM_CONFIG.name,
        TAGLINE: FORUM_CONFIG.tagline,
        VERSION: FORUM_CONFIG.version,
        USERNAME: user.displayName,
        USER_STATUS: userStatus,
        AVATAR: avatar,
        RANK: rankName + '<br>' + pips,
        POST_COUNT: formatNumber(user.postCount),
        JOINED: user.joined,
        LAST_VISIT: lastVisit,
        WARNINGS: warnings,
        PERSONAL_INFO: personalInfo,
        SIGNATURE: user.signature || '<i>No signature</i>',
        WEBSITE_LINK: websiteLink
    };

    const html = replaceVars(template, vars);

    // Write file
    const profilePath = path.join(__dirname, 'members', `${userId}.html`);
    fs.writeFileSync(profilePath, html, 'utf8');
    console.log(`  ✅ Generated: members/${userId}.html`);
}

/**
 * Generate all user profiles
 */
function generateAllProfiles() {
    console.log('\nGenerating user profile pages...');

    const membersDir = path.join(__dirname, 'members');
    if (!fs.existsSync(membersDir)) {
        fs.mkdirSync(membersDir);
    }

    let count = 0;
    for (const [userId, user] of Object.entries(USERS)) {
        // Skip banned users (their profiles still exist but are marked)
        generateUserProfile(userId, user);
        count++;
    }

    console.log(`✅ Generated ${count} user profile pages`);
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

    // Phase 2: Generate threads
    console.log('\n\nPhase 2: Thread Content Generation');
    console.log('-----------------------------------');

    generateAllThreads();
    updateBoardLinksToThreads();

    console.log('\n✨ Phase 2 Complete!');

    // Phase 3: Generate user profiles
    console.log('\n\nPhase 3: User Profile Generation');
    console.log('-----------------------------------');

    generateAllProfiles();

    console.log('\n✨ Phase 3 Complete!');

    // Summary
    console.log('\n\n📊 Final Summary:');
    console.log('==================');
    console.log(`   Forum Index: 1`);
    console.log(`   Categories: ${FORUM_CONFIG.categories.length}`);

    let totalBoards = 0;
    for (const category of FORUM_CONFIG.categories) {
        totalBoards += category.boards.length;
    }
    console.log(`   Boards: ${totalBoards}`);
    console.log(`   Users Configured: ${Object.keys(USERS).length}`);

    let totalThreadsWithContent = 0;
    for (const threadId of Object.keys(THREAD_POSTS)) {
        totalThreadsWithContent++;
    }
    console.log(`   Threads with Content: ${totalThreadsWithContent}`);

    console.log('\n✅ Forum generation complete!');
    console.log('\n🌐 Next Steps:');
    console.log('   1. Open index.html in your browser');
    console.log('   2. Navigate through boards and threads');
    console.log('   3. Check that all styles load correctly');
    console.log('   4. Add more thread content as needed');
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
