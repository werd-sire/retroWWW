// CyberChat Forums - Configuration & Data
// All forum data: categories, boards, users, threads, posts

var FORUM_CONFIG = {
    name: "CyberChat Forums",
    tagline: "The #1 Community for Everything Internet!",
    url: "www.cyberchat-forums.net",
    founded: "January 15, 1998",
    version: "v2.1.4",

    stats: {
        totalMembers: 15847,
        totalPosts: 487392,
        totalThreads: 23451,
        currentOnline: 347,
        mostOnline: {
            count: 892,
            date: "Dec 31, 1999 11:58 PM",
            occasion: "Y2K Countdown"
        },
        newestMember: "MiLLeNNiuMkId",
        newestMemberDate: "Dec 29, 1999 3:42 PM"
    },

    admins: [
        { id: 'cyberwolf', name: 'CyberWolf', title: 'Founder & Owner' },
        { id: 'phoenix_rising', name: 'Phoenix_Rising', title: 'Head Administrator' },
        { id: 'sysadmin_bob', name: 'SysAdmin_Bob', title: 'Technical Administrator' }
    ],

    // User rank thresholds
    ranks: [
        { name: 'Newbie', minPosts: 0, maxPosts: 49, pips: 1, color: '#999999' },
        { name: 'Member', minPosts: 50, maxPosts: 249, pips: 2, color: '#666666' },
        { name: 'Regular', minPosts: 250, maxPosts: 999, pips: 3, color: '#003366' },
        { name: 'Veteran', minPosts: 1000, maxPosts: 2499, pips: 4, color: '#0066CC' },
        { name: 'Elite Member', minPosts: 2500, maxPosts: 9999, pips: 5, color: '#9900CC' },
        { name: 'Legend', minPosts: 10000, maxPosts: 999999, pips: 6, color: '#CC6600' }
    ],

    // Forum categories and boards
    categories: [
        {
            id: 'general',
            name: 'General Forums',
            boards: [
                {
                    id: 'general-discussion',
                    name: 'General Discussion',
                    description: 'Talk about anything and everything!',
                    threads: 2847,
                    posts: 35432,
                    moderators: ['phoenix_rising']
                },
                {
                    id: 'introductions',
                    name: 'Introductions',
                    description: 'New to the forums? Introduce yourself here!',
                    threads: 1523,
                    posts: 8234,
                    moderators: ['momof3', 'webwizard']
                },
                {
                    id: 'off-topic',
                    name: 'Off Topic',
                    description: 'Random, crazy, and everything in between',
                    threads: 4892,
                    posts: 52891,
                    moderators: ['gamegod', 'retrogamer']
                }
            ]
        },
        {
            id: 'technology',
            name: 'Technology',
            boards: [
                {
                    id: 'tech-support',
                    name: 'Tech Support',
                    description: 'Computer problems? Get help here!',
                    threads: 3421,
                    posts: 28567,
                    moderators: ['techmaster99', 'codemonkey']
                },
                {
                    id: 'hardware',
                    name: 'Hardware',
                    description: 'PC building, upgrades, and hardware discussions',
                    threads: 1847,
                    posts: 15234,
                    moderators: ['techmaster99']
                },
                {
                    id: 'software-programming',
                    name: 'Software & Programming',
                    description: 'Coding, applications, and software talk',
                    threads: 1456,
                    posts: 12456,
                    moderators: ['codemonkey']
                },
                {
                    id: 'linux-unix',
                    name: 'Linux & UNIX',
                    description: 'For the penguin lovers and command-line warriors',
                    threads: 982,
                    posts: 9234,
                    moderators: ['techmaster99', 'linuxguru']
                },
                {
                    id: 'mac-users',
                    name: 'Mac Users',
                    description: 'Think Different? Discuss Mac here!',
                    threads: 421,
                    posts: 3421,
                    moderators: ['macfanatic']
                }
            ]
        },
        {
            id: 'internet',
            name: 'Internet & Web',
            boards: [
                {
                    id: 'web-design',
                    name: 'Web Design',
                    description: 'HTML, CSS, JavaScript, and web development',
                    threads: 2134,
                    posts: 18765,
                    moderators: ['webwizard']
                },
                {
                    id: 'isp-connectivity',
                    name: 'ISPs & Connectivity',
                    description: 'Dial-up, cable, DSL, and connectivity issues',
                    threads: 892,
                    posts: 7654,
                    moderators: []
                },
                {
                    id: 'chat-im',
                    name: 'Chat & Instant Messaging',
                    description: 'ICQ, AIM, IRC, and other chat platforms',
                    threads: 1342,
                    posts: 11234,
                    moderators: ['chatmaster']
                }
            ]
        },
        {
            id: 'gaming',
            name: 'Gaming',
            boards: [
                {
                    id: 'pc-gaming',
                    name: 'PC Gaming',
                    description: 'Quake, Half-Life, StarCraft, and more!',
                    threads: 3567,
                    posts: 31234,
                    moderators: ['gamegod', 'fragmaster']
                },
                {
                    id: 'console-gaming',
                    name: 'Console Gaming',
                    description: 'PlayStation, N64, Dreamcast discussions',
                    threads: 2891,
                    posts: 24567,
                    moderators: ['gamegod', 'consolekid']
                },
                {
                    id: 'gaming-industry',
                    name: 'Gaming Industry',
                    description: 'News, rumors, and industry discussion',
                    threads: 982,
                    posts: 8234,
                    moderators: ['gamegod']
                }
            ]
        },
        {
            id: 'entertainment',
            name: 'Entertainment',
            boards: [
                {
                    id: 'movies-tv',
                    name: 'Movies & TV',
                    description: 'The latest films, shows, and entertainment',
                    threads: 2234,
                    posts: 19432,
                    moderators: ['moviebuff']
                },
                {
                    id: 'music',
                    name: 'Music',
                    description: 'All genres, all artists, all music',
                    threads: 1923,
                    posts: 16234,
                    moderators: ['napsterking']
                },
                {
                    id: 'anime-manga',
                    name: 'Anime & Manga',
                    description: 'Japanese animation and comics',
                    threads: 2567,
                    posts: 22891,
                    moderators: ['animelover2000', 'otakumaster']
                }
            ]
        },
        {
            id: 'special-interest',
            name: 'Special Interest',
            boards: [
                {
                    id: 'paranormal-conspiracy',
                    name: 'Paranormal & Conspiracy',
                    description: 'UFOs, aliens, government secrets, and more',
                    threads: 1645,
                    posts: 13567,
                    moderators: ['skepticalone', 'truthseeker']
                },
                {
                    id: 'science-space',
                    name: 'Science & Space',
                    description: 'Scientific discussion and space exploration',
                    threads: 734,
                    posts: 6234,
                    moderators: ['scienceguy']
                },
                {
                    id: 'creative-writing',
                    name: 'Creative Writing & Art',
                    description: 'Share your stories, poetry, and artwork',
                    threads: 1123,
                    posts: 9432,
                    moderators: ['artiste', 'wordsmith']
                }
            ]
        },
        {
            id: 'marketplace',
            name: 'Marketplace',
            boards: [
                {
                    id: 'buy-sell-trade',
                    name: 'Buy/Sell/Trade',
                    description: 'Trade computer parts, games, and collectibles',
                    threads: 1734,
                    posts: 14234,
                    moderators: ['tradingpost']
                }
            ]
        },
        {
            id: 'site',
            name: 'Site Forums',
            boards: [
                {
                    id: 'news-announcements',
                    name: 'Forum News & Announcements',
                    description: 'Official announcements from the admin team',
                    threads: 127,
                    posts: 892,
                    moderators: ['cyberwolf', 'phoenix_rising']
                },
                {
                    id: 'suggestions',
                    name: 'Suggestions & Feedback',
                    description: 'Have an idea? Let us know!',
                    threads: 634,
                    posts: 5432,
                    moderators: ['phoenix_rising']
                },
                {
                    id: 'help-desk',
                    name: 'Help Desk',
                    description: 'Need help using the forums?',
                    threads: 421,
                    posts: 3234,
                    moderators: ['webwizard']
                }
            ]
        }
    ]
};

// User database
var USERS = {
    // Admins
    cyberwolf: {
        id: 'cyberwolf',
        displayName: 'CyberWolf',
        joined: 'Jan 1998',
        postCount: 6745,
        customRank: 'The Alpha',
        isAdmin: true,
        isMod: [],
        avatar: '../../assets/avatars/wolf.gif',
        signature: '<img src="../../assets/gifs/admin.gif"><br><font size="1" color="#666666">Founder of CyberChat Forums<br>"Leading the pack since \'98"</font>',
        location: 'Seattle, WA',
        interests: 'Internet culture, forums, technology',
        personality: 'old-internet-veteran'
    },

    phoenix_rising: {
        id: 'phoenix_rising',
        displayName: 'Phoenix_Rising',
        joined: 'Feb 1998',
        postCount: 4234,
        customRank: 'Head Administrator',
        isAdmin: true,
        isMod: ['general-discussion', 'suggestions'],
        avatar: '../../assets/avatars/phoenix.gif',
        signature: '<font size="1" color="#CC0000"><b>Admin of CyberChat</b></font><br><font size="1">PM me for urgent issues</font>',
        location: 'Portland, OR',
        interests: 'Community building, conflict resolution',
        personality: 'wholesome-mod'
    },

    // Power User Moderators
    techmaster99: {
        id: 'techmaster99',
        displayName: 'TechMaster99',
        joined: 'Feb 1998',
        postCount: 5234,
        customRank: 'RTFM Specialist',
        isAdmin: false,
        isMod: ['tech-support', 'hardware', 'linux-unix'],
        avatar: '../../assets/avatars/computer.gif',
        signature: '<font size="1"><b>"Read The Fine Manual"</b><br>---<br>CPU: Pentium III 500MHz | RAM: 256MB | OS: Dual-boot Win98/RedHat 6.0</font>',
        location: 'Austin, TX',
        interests: 'Linux, hardware, overclocking',
        personality: 'helpful-tech-guru'
    },

    animelover2000: {
        id: 'animelover2000',
        displayName: 'AnimeLover2000',
        joined: 'May 1998',
        postCount: 4892,
        customRank: 'Anime Guru',
        isAdmin: false,
        isMod: ['anime-manga'],
        avatar: '../../assets/avatars/anime-girl.gif',
        signature: '<img src="../../assets/gifs/anime-banner.gif"><br><font size="1">Fav Anime: Evangelion, Cowboy Bebop, Trigun, Escaflowne<br>現在見ている: Serial Experiments Lain</font>',
        location: 'San Francisco, CA',
        interests: 'Anime, manga, Japanese culture',
        personality: 'anime-enthusiast'
    },

    gamegod: {
        id: 'gamegod',
        displayName: 'GameGod',
        joined: 'Mar 1998',
        postCount: 3456,
        customRank: 'Gaming Insider',
        isAdmin: false,
        isMod: ['pc-gaming', 'console-gaming', 'gaming-industry', 'off-topic'],
        avatar: '../../assets/avatars/joystick.gif',
        signature: '<font size="1">PC Master Race | N64 Fanboy | Dreamcast Believer<br>---<br>"I have industry connections you wouldn\'t believe"</font>',
        location: 'Los Angeles, CA',
        interests: 'Gaming, E3, game development',
        personality: 'insider-bragger'
    },

    webwizard: {
        id: 'webwizard',
        displayName: 'WebWizard',
        joined: 'Feb 1998',
        postCount: 3234,
        customRank: 'HTML Sensei',
        isAdmin: false,
        isMod: ['web-design', 'introductions', 'help-desk'],
        avatar: '../../assets/avatars/wizard.gif',
        signature: '<font size="1">&lt;html&gt;&lt;body&gt;Making the web beautiful&lt;/body&gt;&lt;/html&gt;<br>Check out my <a href="#">web design tutorials</a>!</font>',
        location: 'Boston, MA',
        interests: 'Web design, HTML, JavaScript',
        personality: 'helpful-teacher'
    },

    // High-Activity Users
    flameking: {
        id: 'flameking',
        displayName: 'FlameKing',
        joined: 'Apr 1998',
        postCount: 4123,
        customRank: null,
        isAdmin: false,
        isMod: [],
        warnings: 3,
        avatar: '../../assets/avatars/fire.gif',
        signature: '<img src="../../assets/gifs/flame.gif"> <b>BOW TO THE KING</b> <img src="../../assets/gifs/flame.gif"><br><font size="1">If you can\'t handle the heat, GTFO</font>',
        location: 'New York, NY',
        interests: 'Starting arguments, being right',
        personality: 'flame-warrior'
    },

    momof3: {
        id: 'momof3',
        displayName: 'MomOf3',
        joined: 'Sep 1998',
        postCount: 1892,
        customRank: null,
        isAdmin: false,
        isMod: [],
        avatar: '../../assets/avatars/smiley.gif',
        signature: '<font size="1">Proud mother of three wonderful kids!<br>Just trying to learn about this "internet" thing :)<br>Be kind to everyone!</font>',
        location: 'Minneapolis, MN',
        interests: 'Family, parenting, learning',
        personality: 'wholesome-mom'
    },

    codemonkey: {
        id: 'codemonkey',
        displayName: 'CodeMonkey',
        joined: 'Jun 1998',
        postCount: 2567,
        customRank: null,
        isAdmin: false,
        isMod: ['software-programming'],
        avatar: '../../assets/avatars/monkey.gif',
        signature: '<font face="Courier New" size="1">10 PRINT "CODE"\n20 GOTO 10</font>',
        location: 'Silicon Valley, CA',
        interests: 'C++, Visual Basic, Java',
        personality: 'code-nerd'
    },

    retrogamer: {
        id: 'retrogamer',
        displayName: 'RetroGamer',
        joined: 'Jan 1998',
        postCount: 3891,
        customRank: 'BBS Veteran',
        isAdmin: false,
        isMod: ['off-topic'],
        avatar: '../../assets/avatars/retro-console.gif',
        signature: '<font size="1">Been online since 1985 (BBS days)<br>"Kids these days don\'t know what 300 baud feels like"<br>ATARI 2600 FOREVER</font>',
        location: 'Chicago, IL',
        interests: 'Classic gaming, BBS history, nostalgia',
        personality: 'old-internet-veteran'
    },

    skepticalone: {
        id: 'skepticalone',
        displayName: 'SkepticalOne',
        joined: 'Aug 1998',
        postCount: 2891,
        customRank: 'Truth Seeker',
        isAdmin: false,
        isMod: ['paranormal-conspiracy'],
        avatar: '../../assets/avatars/alien.gif',
        signature: '<font size="1" color="#00FF00">THE TRUTH IS OUT THERE<br>Area 51 • Roswell • MJ-12<br>"Question Everything"</font>',
        location: 'Undisclosed',
        interests: 'UFOs, conspiracies, government secrets',
        personality: 'conspiracy-theorist'
    },

    // Mid-Level Active Users
    napsterking: {
        id: 'napsterking',
        displayName: 'NapsterKing',
        joined: 'Sep 1999',
        postCount: 445,
        customRank: null,
        isAdmin: false,
        isMod: ['music'],
        avatar: '../../assets/avatars/music-note.gif',
        signature: '<font size="1">MP3s 4 LIFE | Napster: napsterking99<br>Free music for everyone!</font>',
        location: 'Miami, FL',
        interests: 'Music, MP3s, Napster',
        personality: 'piracy-advocate'
    },

    // Newer/Lower Activity Users
    xxdarkangelxx: {
        id: 'xxdarkangelxx',
        displayName: 'xXDarkAngelXx',
        joined: 'Nov 1999',
        postCount: 87,
        customRank: null,
        isAdmin: false,
        isMod: [],
        avatar: '../../assets/avatars/dark-angel.gif',
        signature: '<font color="#666666"><i>~*~In the darkness I find my light~*~</i><br>Linkin Park | Korn | Limp Bizkit<br>Pain is my art</font>',
        location: 'Somewhere dark',
        interests: 'nu-metal, darkness, being misunderstood',
        personality: 'edgy-teen'
    },

    poketrainer99: {
        id: 'poketrainer99',
        displayName: 'PokeTrainer99',
        joined: 'Aug 1999',
        postCount: 234,
        customRank: null,
        isAdmin: false,
        isMod: [],
        avatar: '../../assets/avatars/pikachu.gif',
        signature: '<img src="../../assets/gifs/pokemon-banner.gif"><br><font size="1">GOTTA CATCH \'EM ALL!!!<br>Favorite: Charizard!!!</font>',
        location: 'California',
        interests: 'Pokemon, Game Boy, Nintendo',
        personality: 'young-enthusiast'
    },

    // Board Moderators
    linuxguru: {
        id: 'linuxguru',
        displayName: 'LinuxGuru',
        joined: 'Jan 1998',
        postCount: 4521,
        customRank: null,
        isAdmin: false,
        isMod: ['linux-unix'],
        avatar: '../../assets/avatars/tux.gif',
        signature: '<font size="1">Slackware 4.0 | kernel 2.2.13<br>"Free as in Freedom"</font>',
        location: 'Berkeley, CA',
        interests: 'Linux, Open Source, Command Line',
        personality: 'old-internet-veteran'
    },

    macfanatic: {
        id: 'macfanatic',
        displayName: 'MacFanatic',
        joined: 'Mar 1998',
        postCount: 2847,
        customRank: null,
        isAdmin: false,
        isMod: ['mac-users'],
        avatar: '../../assets/avatars/apple-logo.gif',
        signature: '<font size="1"><b>PowerMac G3 Blue & White</b><br>Think Different!</font>',
        location: 'Cupertino, CA',
        interests: 'Mac OS, Apple, Design',
        personality: 'corporate-shill'
    },

    chatmaster: {
        id: 'chatmaster',
        displayName: 'ChatMaster',
        joined: 'May 1998',
        postCount: 3912,
        customRank: null,
        isAdmin: false,
        isMod: ['chat-irc'],
        avatar: '../../assets/avatars/irc-logo.gif',
        signature: '<font size="1">IRC Addict | #cyberchat on EFnet<br>mIRC 5.91</font>',
        location: 'Austin, TX',
        interests: 'IRC, Chat, Networking',
        personality: 'helpful-tech-guru'
    },

    fragmaster: {
        id: 'fragmaster',
        displayName: 'FragMaster',
        joined: 'Jun 1998',
        postCount: 5621,
        customRank: 'Quake God',
        isAdmin: false,
        isMod: ['pc-gaming'],
        avatar: '../../assets/avatars/quake-logo.gif',
        signature: '<font size="1">Quake III Arena Champion<br>"gg no re"<br>Frags: 47,392</font>',
        location: 'Dallas, TX',
        interests: 'FPS Gaming, Quake, LAN Parties',
        personality: 'meme-lord'
    },

    consolekid: {
        id: 'consolekid',
        displayName: 'ConsoleKid',
        joined: 'Jul 1998',
        postCount: 3234,
        customRank: null,
        isAdmin: false,
        isMod: ['console-gaming'],
        avatar: '../../assets/avatars/controller.gif',
        signature: '<font size="1">Dreamcast > PS2 > N64 > PSX<br>Fight me.<br>Sega does what Nintendon\'t</font>',
        location: 'Chicago, IL',
        interests: 'Console Gaming, Sega, Sony',
        personality: 'flame-warrior'
    },

    moviebuff: {
        id: 'moviebuff',
        displayName: 'MovieBuff',
        joined: 'Feb 1999',
        postCount: 2156,
        customRank: null,
        isAdmin: false,
        isMod: ['movies-tv'],
        avatar: '../../assets/avatars/film-reel.gif',
        signature: '<font size="1">★★★★★ - My rating system<br>Criterion Collection Enthusiast</font>',
        location: 'Los Angeles, CA',
        interests: 'Film, TV, Cinema',
        personality: 'helpful-tech-guru'
    },

    otakumaster: {
        id: 'otakumaster',
        displayName: 'OtakuMaster',
        joined: 'Apr 1998',
        postCount: 6234,
        customRank: 'Anime Senpai',
        isAdmin: false,
        isMod: ['anime-manga'],
        avatar: '../../assets/avatars/anime-face.gif',
        signature: '<font size="1">Cowboy Bebop | Trigun | Evangelion<br>Sub > Dub FOREVER<br>日本語を勉強しています</font>',
        location: 'San Francisco, CA',
        interests: 'Anime, Manga, Japanese Culture',
        personality: 'anime-enthusiast'
    },

    truthseeker: {
        id: 'truthseeker',
        displayName: 'TruthSeeker',
        joined: 'Sep 1998',
        postCount: 1847,
        customRank: null,
        isAdmin: false,
        isMod: ['paranormal'],
        avatar: '../../assets/avatars/alien.gif',
        signature: '<font size="1">Question Everything | The Truth Is Out There<br>Wake up sheeple!<br>Area 51 | Roswell | JFK</font>',
        location: 'Unknown',
        interests: 'UFOs, Conspiracies, Truth',
        personality: 'conspiracy-theorist'
    },

    scienceguy: {
        id: 'scienceguy',
        displayName: 'ScienceGuy',
        joined: 'Nov 1998',
        postCount: 1523,
        customRank: null,
        isAdmin: false,
        isMod: ['science'],
        avatar: '../../assets/avatars/atom.gif',
        signature: '<font size="1">Physics PhD Student | MIT<br>Science Rules!<br>E=mc²</font>',
        location: 'Cambridge, MA',
        interests: 'Physics, Science, Research',
        personality: 'helpful-tech-guru'
    },

    artiste: {
        id: 'artiste',
        displayName: 'Artiste',
        joined: 'Jan 1999',
        postCount: 891,
        customRank: null,
        isAdmin: false,
        isMod: ['art-graphics'],
        avatar: '../../assets/avatars/paintbrush.gif',
        signature: '<font size="1">Digital Artist | Photoshop 5.5<br>"Art is life"<br>Wacom Tablet User</font>',
        location: 'Portland, OR',
        interests: 'Digital Art, Design, Graphics',
        personality: 'lurker-poster'
    },

    wordsmith: {
        id: 'wordsmith',
        displayName: 'WordSmith',
        joined: 'Mar 1999',
        postCount: 2341,
        customRank: null,
        isAdmin: false,
        isMod: ['creative-writing'],
        avatar: '../../assets/avatars/quill.gif',
        signature: '<font size="1">Published Author | Grammar Guardian<br>"Its" vs "It\'s" - Learn the difference!<br>Oxford comma forever</font>',
        location: 'New York, NY',
        interests: 'Writing, Literature, Grammar',
        personality: 'grammar-nazi'
    },

    tradingpost: {
        id: 'tradingpost',
        displayName: 'TradingPost',
        joined: 'May 1999',
        postCount: 623,
        customRank: null,
        isAdmin: false,
        isMod: ['trading-post'],
        avatar: '../../assets/avatars/dollar.gif',
        signature: '<font size="1">100% Positive Feedback!<br>Check my trade thread!<br>PayPal verified</font>',
        location: 'Seattle, WA',
        interests: 'Trading, Collecting, Deals',
        personality: 'lurker-poster'
    },

    // Newer Users
    newbuilder99: {
        id: 'newbuilder99',
        displayName: 'NewBuilder99',
        joined: 'Dec 1999',
        postCount: 47,
        customRank: null,
        isAdmin: false,
        isMod: [],
        avatar: '../../assets/avatars/newbie.gif',
        signature: '<font size="1">Building my first PC! Wish me luck!</font>',
        location: 'Boston, MA',
        interests: 'Gaming, Learning, PC Building',
        personality: 'eager-newbie'
    },

    frustrated_user: {
        id: 'frustrated_user',
        displayName: 'Frustrated_User',
        joined: 'Nov 1999',
        postCount: 23,
        customRank: null,
        isAdmin: false,
        isMod: [],
        avatar: null,
        signature: null,
        location: 'Unknown',
        interests: 'Trying to fix my PC',
        personality: 'frustrated-newbie'
    },

    confusednewbie: {
        id: 'confusednewbie',
        displayName: 'ConfusedNewbie',
        joined: 'Dec 1999',
        postCount: 12,
        customRank: null,
        isAdmin: false,
        isMod: [],
        avatar: null,
        signature: '<font size="1">Help! I don\'t know what I\'m doing!</font>',
        location: 'Texas',
        interests: 'Learning computers',
        personality: 'confused-newbie'
    },

    musiclover: {
        id: 'musiclover',
        displayName: 'MusicLover',
        joined: 'Aug 1999',
        postCount: 287,
        customRank: null,
        isAdmin: false,
        isMod: [],
        avatar: '../../assets/avatars/music.gif',
        signature: '<font size="1">Support the artists! Buy CDs!</font>',
        location: 'Nashville, TN',
        interests: 'Music, Concerts, CD Collecting',
        personality: 'music-industry-defender'
    },

    // Legendary/Banned Users
    BANNED_trollmaster: {
        id: 'trollmaster',
        displayName: '[BANNED]TrollMaster',
        joined: 'May 1998',
        postCount: 892,
        banned: true,
        bannedDate: 'Aug 1999',
        bannedReason: 'Excessive trolling and harassment',
        isAdmin: false,
        isMod: [],
        personality: 'legendary-troll'
    }
};

// Thread Database
// Structure: THREADS[boardId] = [ array of thread objects ]
var THREADS = {
    // General Discussion Board
    'general-discussion': [
        {
            id: 1,
            title: '📍 Welcome to CyberChat Forums!',
            author: 'cyberwolf',
            date: 'Jan 15, 1998',
            lastPost: { user: 'phoenix_rising', date: 'Dec 28, 1999' },
            replies: 234,
            views: 15673,
            sticky: true,
            locked: false
        },
        {
            id: 2,
            title: 'Y2K Countdown Thread - WHO\'S STAYING UP?!',
            author: 'techmaster99',
            date: 'Dec 25, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 11:47 PM' },
            replies: 523,
            views: 8234,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 3,
            title: 'What are you getting for Christmas 1999?',
            author: 'animelover2000',
            date: 'Dec 10, 1999',
            lastPost: { user: 'poketrainer99', date: 'Dec 29, 1999 10:23 PM' },
            replies: 187,
            views: 3421,
            sticky: false,
            locked: false
        },
        {
            id: 4,
            title: 'Random chat thread - talk about anything!',
            author: 'retrogamer',
            date: 'Nov 3, 1999',
            lastPost: { user: 'xxdarkangelxx', date: 'Dec 29, 1999 9:15 PM' },
            replies: 1247,
            views: 21456,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 5,
            title: 'This forum is getting too popular...',
            author: 'flamekingdeleted',
            date: 'Dec 15, 1999',
            lastPost: { user: 'webwizard', date: 'Dec 29, 1999 8:42 PM' },
            replies: 89,
            views: 1823,
            sticky: false,
            locked: false
        }
    ],

    // Introductions Board
    'introductions': [
        {
            id: 6,
            title: '📍 How to Introduce Yourself (READ FIRST)',
            author: 'phoenix_rising',
            date: 'Jan 15, 1998',
            lastPost: { user: 'phoenix_rising', date: 'Jan 15, 1998' },
            replies: 0,
            views: 4521,
            sticky: true,
            locked: true
        },
        {
            id: 7,
            title: 'Hey everyone! New here from California!',
            author: 'millenniumkid',
            date: 'Dec 29, 1999 3:45 PM',
            lastPost: { user: 'momof3', date: 'Dec 29, 1999 11:12 PM' },
            replies: 12,
            views: 156,
            sticky: false,
            locked: false
        },
        {
            id: 8,
            title: 'Greetings from Tokyo! Anime fan here :)',
            author: 'tokyodreamer',
            date: 'Dec 28, 1999',
            lastPost: { user: 'otakumaster', date: 'Dec 29, 1999 10:34 PM' },
            replies: 23,
            views: 421,
            sticky: false,
            locked: false
        }
    ],

    // Off Topic Board
    'off-topic': [
        {
            id: 9,
            title: 'This forum is dying',
            author: 'flamekingdeleted',
            date: 'Dec 20, 1999',
            lastPost: { user: 'codemonkey', date: 'Dec 29, 1999 11:53 PM' },
            replies: 342,
            views: 7821,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 10,
            title: 'Best pizza toppings - FIGHT!',
            author: 'gamegod',
            date: 'Dec 22, 1999',
            lastPost: { user: 'momof3', date: 'Dec 29, 1999 9:27 PM' },
            replies: 156,
            views: 2134,
            sticky: false,
            locked: false
        },
        {
            id: 11,
            title: 'I just got banned from another forum lol',
            author: 'xxdarkangelxx',
            date: 'Dec 27, 1999',
            lastPost: { user: 'phoenix_rising', date: 'Dec 29, 1999 8:15 PM' },
            replies: 45,
            views: 892,
            sticky: false,
            locked: true
        }
    ],

    // Tech Support Board
    'tech-support': [
        {
            id: 12,
            title: '📍 READ BEFORE POSTING - Tech Support Rules',
            author: 'techmaster99',
            date: 'Feb 1, 1998',
            lastPost: { user: 'techmaster99', date: 'Dec 1, 1999' },
            replies: 5,
            views: 8234,
            sticky: true,
            locked: true
        },
        {
            id: 13,
            title: 'HELP!! Windows 98 won\'t boot after installing RealPlayer!',
            author: 'momof3',
            date: 'Dec 29, 1999 2:15 PM',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 11:43 PM' },
            replies: 18,
            views: 234,
            sticky: false,
            locked: false
        },
        {
            id: 14,
            title: 'Blue Screen of Death - 0x0000007B error',
            author: 'frustrated_user',
            date: 'Dec 28, 1999',
            lastPost: { user: 'codemonkey', date: 'Dec 29, 1999 10:56 PM' },
            replies: 27,
            views: 567,
            sticky: false,
            locked: false
        },
        {
            id: 15,
            title: 'How do I uninstall Bonzi Buddy?? It won\'t go away!',
            author: 'confusednewbie',
            date: 'Dec 27, 1999',
            lastPost: { user: 'sysadmin_bob', date: 'Dec 29, 1999 9:22 PM' },
            replies: 43,
            views: 1234,
            sticky: false,
            locked: false
        },
        {
            id: 16,
            title: 'Internet Explorer 5.0 keeps crashing',
            author: 'webwizard',
            date: 'Dec 26, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 8:47 PM' },
            replies: 31,
            views: 891,
            sticky: false,
            locked: false
        }
    ],

    // Hardware Board
    'hardware': [
        {
            id: 17,
            title: 'Building my first PC - need advice!',
            author: 'newbuilder99',
            date: 'Dec 28, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 11:34 PM' },
            replies: 67,
            views: 1456,
            sticky: false,
            locked: false
        },
        {
            id: 18,
            title: 'Pentium III vs AMD Athlon - which is better?',
            author: 'gamegod',
            date: 'Dec 20, 1999',
            lastPost: { user: 'codemonkey', date: 'Dec 29, 1999 10:12 PM' },
            replies: 234,
            views: 5623,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 19,
            title: 'Just got a Voodoo3 3000 - this thing is AMAZING',
            author: 'fragmaster',
            date: 'Dec 15, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 9:45 PM' },
            replies: 89,
            views: 2341,
            sticky: false,
            locked: false
        }
    ],

    // Software & Programming Board
    'software-programming': [
        {
            id: 20,
            title: 'Learning C++ - good tutorials?',
            author: 'aspiringcoder',
            date: 'Dec 27, 1999',
            lastPost: { user: 'codemonkey', date: 'Dec 29, 1999 11:28 PM' },
            replies: 42,
            views: 892,
            sticky: false,
            locked: false
        },
        {
            id: 21,
            title: 'Visual Basic 6.0 vs Delphi - your thoughts?',
            author: 'codemonkey',
            date: 'Dec 18, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 9:57 PM' },
            replies: 78,
            views: 1623,
            sticky: false,
            locked: false
        },
        {
            id: 22,
            title: 'Made my first webpage! Check it out!',
            author: 'webwizard',
            date: 'Dec 25, 1999',
            lastPost: { user: 'artiste', date: 'Dec 29, 1999 8:33 PM' },
            replies: 34,
            views: 673,
            sticky: false,
            locked: false
        }
    ],

    // Linux & UNIX Board
    'linux-unix': [
        {
            id: 23,
            title: 'Slackware vs Red Hat - the eternal debate',
            author: 'linuxguru',
            date: 'Dec 10, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 11:19 PM' },
            replies: 156,
            views: 3421,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 24,
            title: 'Compiled Linux kernel 2.2.13 - minor victory!',
            author: 'linuxguru',
            date: 'Dec 22, 1999',
            lastPost: { user: 'codemonkey', date: 'Dec 29, 1999 10:07 PM' },
            replies: 45,
            views: 891,
            sticky: false,
            locked: false
        },
        {
            id: 25,
            title: 'Why Linux will NEVER be mainstream',
            author: 'windowsfan',
            date: 'Dec 15, 1999',
            lastPost: { user: 'linuxguru', date: 'Dec 29, 1999 9:41 PM' },
            replies: 289,
            views: 6234,
            sticky: false,
            locked: false,
            hot: true
        }
    ],

    // Mac Users Board
    'mac-users': [
        {
            id: 26,
            title: 'PowerMac G3 vs iMac - which did you get?',
            author: 'macfanatic',
            date: 'Dec 20, 1999',
            lastPost: { user: 'artiste', date: 'Dec 29, 1999 10:45 PM' },
            replies: 67,
            views: 1234,
            sticky: false,
            locked: false
        },
        {
            id: 27,
            title: 'Mac OS 9 is the best OS ever made',
            author: 'macfanatic',
            date: 'Dec 12, 1999',
            lastPost: { user: 'linuxguru', date: 'Dec 29, 1999 9:12 PM' },
            replies: 134,
            views: 2891,
            sticky: false,
            locked: false
        }
    ],

    // Web Design Board
    'web-design': [
        {
            id: 22,
            title: 'Post your personal websites! Show off your pages!',
            author: 'webwizard',
            date: 'Dec 10, 1999 10:23 AM',
            lastPost: { user: 'webwizard', date: 'Dec 29, 1999 11:22 PM' },
            replies: 13,
            views: 892,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 28,
            title: 'Flash 4 vs animated GIFs - discuss!',
            author: 'webwizard',
            date: 'Dec 23, 1999',
            lastPost: { user: 'artiste', date: 'Dec 29, 1999 11:08 PM' },
            replies: 89,
            views: 1823,
            sticky: false,
            locked: false
        },
        {
            id: 29,
            title: 'Made a cool JavaScript mouseover effect!',
            author: 'webwizard',
            date: 'Dec 19, 1999',
            lastPost: { user: 'codemonkey', date: 'Dec 29, 1999 9:53 PM' },
            replies: 42,
            views: 892,
            sticky: false,
            locked: false
        },
        {
            id: 30,
            title: 'Tables vs Frames for layout?',
            author: 'aspiring_designer',
            date: 'Dec 16, 1999',
            lastPost: { user: 'webwizard', date: 'Dec 29, 1999 8:21 PM' },
            replies: 156,
            views: 3421,
            sticky: false,
            locked: false,
            hot: true
        }
    ],

    // Chat & IRC Board
    'chat-irc': [
        {
            id: 31,
            title: 'Best IRC client? mIRC vs PIRCH',
            author: 'chatmaster',
            date: 'Dec 21, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 10:39 PM' },
            replies: 98,
            views: 2134,
            sticky: false,
            locked: false
        },
        {
            id: 32,
            title: 'Join us on #cyberchat @ EFnet!',
            author: 'chatmaster',
            date: 'Dec 1, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 9:28 PM' },
            replies: 234,
            views: 5623,
            sticky: false,
            locked: false,
            hot: true
        }
    ],

    // Napster Board
    'napster': [
        {
            id: 33,
            title: 'Napster is going to change music FOREVER!',
            author: 'napsterking',
            date: 'Dec 15, 1999',
            lastPost: { user: 'musiclover', date: 'Dec 29, 1999 11:41 PM' },
            replies: 312,
            views: 7234,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 34,
            title: 'Best MP3 encoder? LAME vs Fraunhofer',
            author: 'napsterking',
            date: 'Dec 18, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 10:23 PM' },
            replies: 67,
            views: 1456,
            sticky: false,
            locked: false
        },
        {
            id: 35,
            title: 'My collection hit 5000 MP3s today!',
            author: 'musiclover',
            date: 'Dec 22, 1999',
            lastPost: { user: 'napsterking', date: 'Dec 29, 1999 9:14 PM' },
            replies: 45,
            views: 892,
            sticky: false,
            locked: false
        }
    ],

    // PC Gaming Board
    'pc-gaming': [
        {
            id: 36,
            title: 'Quake III Arena - WHO WANTS TO FRAG?!',
            author: 'fragmaster',
            date: 'Dec 26, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 11:52 PM' },
            replies: 234,
            views: 5821,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 37,
            title: 'Half-Life is the best FPS ever made. Change my mind.',
            author: 'gamegod',
            date: 'Dec 20, 1999',
            lastPost: { user: 'fragmaster', date: 'Dec 29, 1999 10:48 PM' },
            replies: 189,
            views: 4234,
            sticky: false,
            locked: false
        },
        {
            id: 38,
            title: 'Unreal Tournament vs Quake III - THE ULTIMATE SHOWDOWN',
            author: 'fragmaster',
            date: 'Dec 10, 1999',
            lastPost: { user: 'consolekid', date: 'Dec 29, 1999 9:36 PM' },
            replies: 456,
            views: 12341,
            sticky: false,
            locked: false,
            hot: true
        }
    ],

    // Console Gaming Board
    'console-gaming': [
        {
            id: 39,
            title: 'DREAMCAST IS AMAZING!!!',
            author: 'consolekid',
            date: 'Dec 24, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 11:37 PM' },
            replies: 178,
            views: 3892,
            sticky: false,
            locked: false
        },
        {
            id: 40,
            title: 'Nintendo 64 vs PlayStation - which won the generation?',
            author: 'consolekid',
            date: 'Dec 15, 1999',
            lastPost: { user: 'poketrainer99', date: 'Dec 29, 1999 10:29 PM' },
            replies: 312,
            views: 7621,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 41,
            title: 'Got Sonic Adventure for Dreamcast - SO GOOD',
            author: 'retrogamer',
            date: 'Dec 19, 1999',
            lastPost: { user: 'consolekid', date: 'Dec 29, 1999 9:07 PM' },
            replies: 67,
            views: 1523,
            sticky: false,
            locked: false
        }
    ],

    // Pokemon Board
    'pokemon': [
        {
            id: 42,
            title: 'Pokemon Yellow just came out!! Who got it?!',
            author: 'poketrainer99',
            date: 'Dec 27, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 11:21 PM' },
            replies: 156,
            views: 3421,
            sticky: false,
            locked: false
        },
        {
            id: 43,
            title: 'Best starter? Bulbasaur vs Charmander vs Squirtle',
            author: 'poketrainer99',
            date: 'Dec 18, 1999',
            lastPost: { user: 'animelover2000', date: 'Dec 29, 1999 10:12 PM' },
            replies: 289,
            views: 6234,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 44,
            title: 'Finally completed my Pokedex!!!',
            author: 'pokemasterjay',
            date: 'Dec 22, 1999',
            lastPost: { user: 'poketrainer99', date: 'Dec 29, 1999 9:45 PM' },
            replies: 78,
            views: 1892,
            sticky: false,
            locked: false
        }
    ],

    // Movies & TV Board
    'movies-tv': [
        {
            id: 45,
            title: 'The Matrix changed cinema forever',
            author: 'moviebuff',
            date: 'Dec 20, 1999',
            lastPost: { user: 'scienceguy', date: 'Dec 29, 1999 11:15 PM' },
            replies: 234,
            views: 5621,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 54,
            title: 'X-Files finale - WHAT JUST HAPPENED?!',
            author: 'skepticalone',
            date: 'Dec 19, 1999 8:47 PM',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 10:37 PM' },
            replies: 7,
            views: 345,
            sticky: false,
            locked: false
        },
        {
            id: 46,
            title: 'Star Wars Episode I - your honest thoughts?',
            author: 'moviebuff',
            date: 'Dec 12, 1999',
            lastPost: { user: 'retrogamer', date: 'Dec 29, 1999 10:03 PM' },
            replies: 456,
            views: 11234,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 47,
            title: 'Best TV show of 1999?',
            author: 'moviebuff',
            date: 'Dec 26, 1999',
            lastPost: { user: 'momof3', date: 'Dec 29, 1999 9:27 PM' },
            replies: 123,
            views: 2891,
            sticky: false,
            locked: false
        }
    ],

    // Music Board
    'music': [
        {
            id: 48,
            title: 'Limp Bizkit vs Korn - best nu-metal band?',
            author: 'xxdarkangelxx',
            date: 'Dec 24, 1999',
            lastPost: { user: 'musiclover', date: 'Dec 29, 1999 11:09 PM' },
            replies: 189,
            views: 4123,
            sticky: false,
            locked: false
        },
        {
            id: 49,
            title: 'Just bought a CD burner - this changes everything!',
            author: 'napsterking',
            date: 'Dec 19, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 9:54 PM' },
            replies: 98,
            views: 2341,
            sticky: false,
            locked: false
        }
    ],

    // Anime & Manga Board
    'anime-manga': [
        {
            id: 50,
            title: 'Cowboy Bebop is a MASTERPIECE',
            author: 'otakumaster',
            date: 'Dec 21, 1999',
            lastPost: { user: 'animelover2000', date: 'Dec 29, 1999 11:44 PM' },
            replies: 267,
            views: 6234,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 51,
            title: 'Sub vs Dub - the eternal debate',
            author: 'otakumaster',
            date: 'Dec 10, 1999',
            lastPost: { user: 'animelover2000', date: 'Dec 29, 1999 10:32 PM' },
            replies: 412,
            views: 9823,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 52,
            title: 'Where to buy anime VHS tapes online?',
            author: 'animelover2000',
            date: 'Dec 23, 1999',
            lastPost: { user: 'otakumaster', date: 'Dec 29, 1999 9:18 PM' },
            replies: 56,
            views: 1234,
            sticky: false,
            locked: false
        }
    ],

    // Science Board
    'science': [
        {
            id: 53,
            title: 'Will the world really end in 2000? (Y2K discussion)',
            author: 'scienceguy',
            date: 'Dec 15, 1999',
            lastPost: { user: 'truthseeker', date: 'Dec 29, 1999 11:31 PM' },
            replies: 345,
            views: 8234,
            sticky: false,
            locked: false,
            hot: true
        }
    ],

    // Paranormal Board
    'paranormal': [
        {
            id: 55,
            title: 'PROOF that aliens visited Earth in 1947!',
            author: 'truthseeker',
            date: 'Dec 22, 1999',
            lastPost: { user: 'scienceguy', date: 'Dec 29, 1999 11:27 PM' },
            replies: 234,
            views: 5621,
            sticky: false,
            locked: false,
            hot: true
        },
        {
            id: 56,
            title: 'The government is hiding something about Y2K...',
            author: 'truthseeker',
            date: 'Dec 26, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 10:14 PM' },
            replies: 167,
            views: 3892,
            sticky: false,
            locked: false
        }
    ],

    // Art & Graphics Board
    'art-graphics': [
        {
            id: 57,
            title: 'Photoshop 5.5 vs Paint Shop Pro - which do you use?',
            author: 'artiste',
            date: 'Dec 19, 1999',
            lastPost: { user: 'webwizard', date: 'Dec 29, 1999 10:56 PM' },
            replies: 98,
            views: 2341,
            sticky: false,
            locked: false
        },
        {
            id: 58,
            title: 'Share your latest digital art!',
            author: 'artiste',
            date: 'Dec 12, 1999',
            lastPost: { user: 'webwizard', date: 'Dec 29, 1999 9:33 PM' },
            replies: 156,
            views: 4234,
            sticky: false,
            locked: false
        }
    ],

    // Creative Writing Board
    'creative-writing': [
        {
            id: 59,
            title: 'Weekly Writing Prompt: "The Last Day of 1999"',
            author: 'wordsmith',
            date: 'Dec 27, 1999',
            lastPost: { user: 'artiste', date: 'Dec 29, 1999 11:03 PM' },
            replies: 67,
            views: 1523,
            sticky: false,
            locked: false
        },
        {
            id: 60,
            title: 'Common grammar mistakes that drive me INSANE',
            author: 'wordsmith',
            date: 'Dec 15, 1999',
            lastPost: { user: 'webwizard', date: 'Dec 29, 1999 9:47 PM' },
            replies: 234,
            views: 5621,
            sticky: false,
            locked: false,
            hot: true
        }
    ],

    // Trading Post Board
    'trading-post': [
        {
            id: 61,
            title: '📍 TRADING POST RULES - Read Before Posting!',
            author: 'tradingpost',
            date: 'May 1, 1999',
            lastPost: { user: 'tradingpost', date: 'Dec 1, 1999' },
            replies: 3,
            views: 2341,
            sticky: true,
            locked: true
        },
        {
            id: 62,
            title: 'WTS: Voodoo2 12MB - $150 OBO',
            author: 'sellinggpu',
            date: 'Dec 28, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 10:42 PM' },
            replies: 23,
            views: 567,
            sticky: false,
            locked: false
        },
        {
            id: 63,
            title: 'WTB: Pokemon cards (1st edition Charizard)',
            author: 'poketrainer99',
            date: 'Dec 26, 1999',
            lastPost: { user: 'tradingpost', date: 'Dec 29, 1999 9:21 PM' },
            replies: 34,
            views: 892,
            sticky: false,
            locked: false
        }
    ],

    // Forum Discussion Board
    'forum-discussion': [
        {
            id: 64,
            title: 'Ideas for new board categories?',
            author: 'phoenix_rising',
            date: 'Dec 20, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 10:59 PM' },
            replies: 145,
            views: 3421,
            sticky: false,
            locked: false
        },
        {
            id: 65,
            title: 'Can we get a dark theme option?',
            author: 'xxdarkangelxx',
            date: 'Dec 24, 1999',
            lastPost: { user: 'sysadmin_bob', date: 'Dec 29, 1999 9:12 PM' },
            replies: 78,
            views: 1823,
            sticky: false,
            locked: false
        }
    ],

    // Help Desk Board
    'help-desk': [
        {
            id: 66,
            title: 'How do I change my avatar?',
            author: 'momof3',
            date: 'Dec 28, 1999',
            lastPost: { user: 'phoenix_rising', date: 'Dec 29, 1999 11:18 PM' },
            replies: 12,
            views: 234,
            sticky: false,
            locked: false
        },
        {
            id: 67,
            title: 'Forgot my password - please help!',
            author: 'forgetfuluser',
            date: 'Dec 27, 1999',
            lastPost: { user: 'sysadmin_bob', date: 'Dec 29, 1999 9:58 PM' },
            replies: 5,
            views: 156,
            sticky: false,
            locked: false
        }
    ],

    // Site News Board
    'site-news': [
        {
            id: 68,
            title: '🎉 CyberChat Forums reaches 15,000 members!',
            author: 'cyberwolf',
            date: 'Dec 25, 1999',
            lastPost: { user: 'gamegod', date: 'Dec 29, 1999 11:41 PM' },
            replies: 189,
            views: 4521,
            sticky: true,
            locked: false
        },
        {
            id: 69,
            title: 'Server upgrade scheduled for Jan 1, 2000',
            author: 'sysadmin_bob',
            date: 'Dec 20, 1999',
            lastPost: { user: 'techmaster99', date: 'Dec 29, 1999 10:27 PM' },
            replies: 67,
            views: 2134,
            sticky: false,
            locked: false
        }
    ]
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FORUM_CONFIG, USERS, THREADS };
}
