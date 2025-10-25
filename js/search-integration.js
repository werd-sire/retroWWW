/**
 * RetroWeb Search Integration System
 * Centralized search database and functionality
 */

// Centralized Site Database
var RetroWebSites = {
    // Pokemon Sites
    "bobby-pokemon": {
        url: "sites/geocities-fan/index.html",
        title: "Bobby's Pokemon Page - The Ultimate Pokemon Resource!",
        snippet: "Welcome to my Pokemon page! I have all 150 Pokemon listed with pictures! Trading cards, game tips, and more!",
        keywords: "pokemon pikachu charizard cards nintendo gameboy ash misty brock bobby ultimate database",
        category: "pokemon",
        webmaster: "Bobby (Age 12)",
        founded: "November 1999",
        working: true,
        rings: ["pokemon", "personal"]
    },

    "sarah-pokemon": {
        url: "sites/pokemon-paradise/index.html",
        title: "Sarah's REAL Pokemon Paradise - Original Content Only!",
        snippet: "The only authentic Pokemon fan site with original artwork and content. Do NOT steal!",
        keywords: "pokemon pikachu original authentic sarah mitchell real not stolen paradise artwork",
        category: "pokemon",
        webmaster: "Sarah Mitchell (Age 14)",
        founded: "December 1999",
        working: true,
        rings: ["pokemon", "personal"]
    },

    // Conspiracy Sites
    "truth-seekers": {
        url: "sites/truth-seekers/index.html",
        title: "Truth Seekers Network - They Don't Want You to Know!",
        snippet: "Exposing government lies and alien coverups. The truth is out there and we have the evidence!",
        keywords: "conspiracy aliens ufo area 51 government mind control y2k illuminati truth seekers",
        category: "conspiracy",
        webmaster: "Agent X (Identity Protected)",
        founded: "June 1999",
        working: true,
        rings: ["conspiracy"]
    },

    "federal-watch-archive": {
        url: "sites/federal-watch-archive/index.html",
        title: "Federal Watch Archive - Dr. Patricia Caldwell - Government Transparency Research",
        snippet: "Independent research on federal accountability and transparency by Dr. Patricia Caldwell, former Defense Intelligence Agency analyst. 3,247 verified documents.",
        keywords: "government declassified documents foia cia fbi transparency research federal watch patricia caldwell dia intelligence",
        category: "conspiracy",
        webmaster: "Dr. Patricia Caldwell",
        founded: "March 1997",
        working: true,
        rings: ["conspiracy"]
    },

    // Personal Sites
    "crystal-unicorns": {
        url: "sites/crystal-unicorns/index.html",
        title: "Crystal Moonbeam's Magical Cyber-Unicorn Emporium",
        snippet: "Spiritual healing, crystal magic, and unicorn wisdom. Find your inner light!",
        keywords: "spiritual healing crystals unicorns magic new age mystical crystal moonbeam",
        category: "personal",
        webmaster: "Crystal Moonbeam",
        founded: "August 1999",
        working: true,
        rings: ["personal"]
    },

    "steves-hamster": {
        url: "sites/steves-hamster/index.html",
        title: "Steve's Amazing Hamster Paradise",
        snippet: "Everything you need to know about hamster care! Photos of my pet hamsters and care tips.",
        keywords: "hamster pets animals care cute fluffy steve paradise pet care",
        category: "personal",
        webmaster: "Steve",
        founded: "July 1999",
        working: true,
        rings: ["personal"]
    },

    "tamagotchi-heaven": {
        url: "sites/tamagotchi-heaven/index.html",
        title: "Tamagotchi Heaven - Virtual Pet Paradise",
        snippet: "The ultimate guide to caring for your Tamagotchi! Tips, tricks, and virtual pet community.",
        keywords: "tamagotchi virtual pet care tips tricks bandai electronic toy heaven",
        category: "personal",
        webmaster: "TamaLover99",
        founded: "October 1999",
        working: true,
        rings: ["personal"]
    },

    // Professional Sites
    "webmaster-dave": {
        url: "sites/webmaster-dave/index.html",
        title: "Webmaster Dave's Digital Design Emporium",
        snippet: "Professional web design services since 1997! HTML expert with affordable rates and quick turnaround.",
        keywords: "web design html professional websites business dave thompson digital emporium",
        category: "professional",
        webmaster: "Dave Thompson",
        founded: "January 1997",
        working: true,
        rings: ["professional"]
    },

    // Extreme Sports
    "xtreme-sports": {
        url: "sites/xtreme-sports/index.html",
        title: "Brad's Xtreme Sports Page - Get Radical!",
        snippet: "Skateboarding tricks, extreme sports videos, and nu-metal music. Tony Hawk rules!",
        keywords: "skateboard extreme sports tony hawk tricks nu metal korn limp bizkit brad radical",
        category: "extreme",
        webmaster: "Brad",
        founded: "May 1999",
        working: true,
        rings: ["extreme"]
    },

    // Anime Sites
    "anime-shrine": {
        url: "sites/anime-shrine/index.html",
        title: "Akira's Anime Shrine - Otaku Paradise",
        snippet: "The best anime and manga resource on the web! Reviews, images, and discussion.",
        keywords: "anime manga japanese kawaii sailor moon dragon ball otaku akira shrine",
        category: "anime",
        webmaster: "Akira",
        founded: "March 1999",
        working: true,
        rings: ["anime"]
    },

    // Collectibles
    "beanie-baby-haven": {
        url: "sites/beanie-baby-haven/index.html",
        title: "Janet's Beanie Baby Haven - Investment Central",
        snippet: "Rare Beanie Babies for sale and trade! Current market prices and investment advice.",
        keywords: "beanie baby collectible rare princess bear ty investment trading janet haven",
        category: "collectibles",
        webmaster: "Janet",
        founded: "February 1999",
        working: true,
        rings: ["collectibles"]
    },

    // Music Sites
    "neon-shadows": {
        url: "sites/neon-shadows/index.html",
        title: "The Neon Shadows - Official Band Website",
        snippet: "The hottest alternative rock band in the tri-state area! Check out our demos, show dates, and Y2K millennium concert info.",
        keywords: "neon shadows alternative rock grunge band music demos electric nights live shows y2k concert local music",
        category: "music",
        webmaster: "Danny Rodriguez (Lead Singer)",
        founded: "November 1999",
        working: true,
        rings: ["music", "personal"]
    },

    // Community Services
    "classifieds": {
        url: "classifieds/index.html",
        title: "CyberFind Classifieds - Buy, Sell, Trade Online",
        snippet: "Free online classified advertisements. Find great deals on everything!",
        keywords: "classifieds buy sell trade free online ads marketplace cyberfind",
        category: "community",
        webmaster: "CyberFind Staff",
        founded: "January 1999",
        working: true,
        rings: ["community"]
    },

    "dating": {
        url: "dating/index.html",
        title: "CyberFind Dating - Find Your Perfect Match!",
        snippet: "Meet singles in your area! Chat, email, and find love on the Information Superhighway.",
        keywords: "dating singles personals romance love relationships meet chat cyberfind",
        category: "community",
        webmaster: "CyberFind Staff",
        founded: "March 1999",
        working: true,
        rings: ["community"]
    }
};

// Fake broken sites for search variety
var BrokenSites = [
    {
        url: "error-404.html",
        title: "Mike's Computer Lab - Programming Tutorials",
        snippet: "Learn Java, C++, and Visual Basic! Step-by-step tutorials for beginners.",
        keywords: "programming java c++ visual basic tutorials computer science code mike",
        working: false,
        error: "404 - Page Not Found"
    },
    {
        url: "error-500.html",
        title: "GameStation Central - Video Game Reviews",
        snippet: "The latest reviews of PlayStation, Nintendo 64, and PC games!",
        keywords: "games video games playstation nintendo 64 pc reviews gaming gamestation",
        working: false,
        error: "500 - Internal Server Error"
    },
    {
        url: "error-404.html",
        title: "Y2K Survival Guide - Prepare for the Millennium",
        snippet: "Essential tips for surviving the Y2K computer crisis! Stock up now!",
        keywords: "y2k millennium bug survival crisis computer prepare emergency",
        working: false,
        error: "404 - Page Not Found"
    },
    {
        url: "error-500.html",
        title: "MP3 Download Central - Free Music Files",
        snippet: "Download the latest MP3s! All your favorite bands and songs.",
        keywords: "mp3 download music free files songs bands napster",
        working: false,
        error: "500 - Internal Server Error"
    }
];

/**
 * Search function for RetroWeb sites
 * @param {string} query - Search query
 * @param {object} options - Search options
 * @returns {array} - Array of search results
 */
function searchRetroWeb(query, options) {
    options = options || {};
    var maxResults = options.maxResults || 10;
    var includeBroken = options.includeBroken !== false; // Default true
    var categoryFilter = options.category || null;

    query = query.toLowerCase().trim();
    if (!query) return [];

    var searchTerms = query.split(' ').filter(function(term) {
        return term.length >= 2;
    });

    var results = [];

    // Search real sites first
    for (var siteId in RetroWebSites) {
        var site = RetroWebSites[siteId];

        // Category filter
        if (categoryFilter && site.category !== categoryFilter) {
            continue;
        }

        var score = 0;

        for (var t = 0; t < searchTerms.length; t++) {
            var term = searchTerms[t];

            // Exact title matches (highest priority)
            if (site.title.toLowerCase().indexOf(term) !== -1) {
                score += 10;
            }
            // Keyword matches (high priority)
            if (site.keywords.toLowerCase().indexOf(term) !== -1) {
                score += 7;
            }
            // Snippet matches (medium priority)
            if (site.snippet.toLowerCase().indexOf(term) !== -1) {
                score += 3;
            }
            // Webmaster matches
            if (site.webmaster && site.webmaster.toLowerCase().indexOf(term) !== -1) {
                score += 5;
            }
        }

        if (score > 0) {
            site.relevanceScore = score;
            site.id = siteId;
            results.push(site);
        }
    }

    // Add broken sites occasionally
    if (includeBroken && results.length > 0 && Math.random() < 0.3) {
        for (var b = 0; b < BrokenSites.length && results.length < maxResults; b++) {
            var brokenSite = BrokenSites[b];
            var brokenScore = 0;

            for (var t = 0; t < searchTerms.length; t++) {
                var term = searchTerms[t];
                if (brokenSite.title.toLowerCase().indexOf(term) !== -1 ||
                    brokenSite.keywords.toLowerCase().indexOf(term) !== -1) {
                    brokenScore += 1;
                }
            }

            if (brokenScore > 0 && Math.random() < 0.4) {
                brokenSite.relevanceScore = brokenScore;
                results.push(brokenSite);
                break; // Only add one broken site
            }
        }
    }

    // Sort by relevance score, prioritize working sites
    results.sort(function(a, b) {
        if (a.working === true && b.working !== true) return -1;
        if (b.working === true && a.working !== true) return 1;
        return b.relevanceScore - a.relevanceScore;
    });

    return results.slice(0, maxResults);
}

/**
 * Add new site to the database
 * @param {string} siteId - Unique site identifier
 * @param {object} siteData - Site information
 */
function addSiteToDatabase(siteId, siteData) {
    RetroWebSites[siteId] = siteData;
}

/**
 * Get sites by category
 * @param {string} category - Category name
 * @returns {array} - Sites in category
 */
function getSitesByCategory(category) {
    var sites = [];
    for (var siteId in RetroWebSites) {
        if (RetroWebSites[siteId].category === category) {
            sites.push({
                id: siteId,
                ...RetroWebSites[siteId]
            });
        }
    }
    return sites;
}

/**
 * Get sites by web ring
 * @param {string} ringName - Ring name
 * @returns {array} - Sites in ring
 */
function getSitesByRing(ringName) {
    var sites = [];
    for (var siteId in RetroWebSites) {
        var site = RetroWebSites[siteId];
        if (site.rings && site.rings.indexOf(ringName) !== -1) {
            sites.push({
                id: siteId,
                ...site
            });
        }
    }
    return sites;
}

/**
 * Get random site
 * @param {string} category - Optional category filter
 * @returns {object} - Random site data
 */
function getRandomSite(category) {
    var sites = category ? getSitesByCategory(category) : Object.keys(RetroWebSites);
    var randomIndex = Math.floor(Math.random() * sites.length);

    if (category) {
        return sites[randomIndex];
    } else {
        var siteId = sites[randomIndex];
        return {
            id: siteId,
            ...RetroWebSites[siteId]
        };
    }
}

/**
 * Get site statistics
 * @returns {object} - Site statistics
 */
function getSiteStatistics() {
    var totalSites = Object.keys(RetroWebSites).length;
    var categories = {};
    var rings = {};

    for (var siteId in RetroWebSites) {
        var site = RetroWebSites[siteId];

        // Count categories
        categories[site.category] = (categories[site.category] || 0) + 1;

        // Count rings
        if (site.rings) {
            for (var i = 0; i < site.rings.length; i++) {
                var ring = site.rings[i];
                rings[ring] = (rings[ring] || 0) + 1;
            }
        }
    }

    return {
        totalSites: totalSites,
        categories: categories,
        rings: rings,
        activeSites: totalSites, // All current sites are active
        brokenSites: BrokenSites.length
    };
}

// Export functions for use in other scripts
if (typeof window !== 'undefined') {
    window.RetroWebSites = RetroWebSites;
    window.searchRetroWeb = searchRetroWeb;
    window.addSiteToDatabase = addSiteToDatabase;
    window.getSitesByCategory = getSitesByCategory;
    window.getSitesByRing = getSitesByRing;
    window.getRandomSite = getRandomSite;
    window.getSiteStatistics = getSiteStatistics;
}