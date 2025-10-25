/**
 * RetroWeb Web Ring Navigation System
 * Handles navigation between sites in themed web rings
 */

// Web Ring Data Structure
var WebRings = {
    pokemon: {
        name: "Pokemon Ring",
        sites: [
            {
                id: "bobby-pokemon",
                name: "Bobby's Pokemon Page",
                url: "../sites/geocities-fan/index.html"
            },
            {
                id: "sarah-pokemon",
                name: "Sarah's Pokemon Paradise",
                url: "../sites/pokemon-paradise/index.html"
            }
        ]
    },

    conspiracy: {
        name: "Conspiracy & Truth Ring",
        sites: [
            {
                id: "truth-seekers",
                name: "Truth Seekers Network",
                url: "../sites/truth-seekers/index.html"
            },
            {
                id: "federal-watch",
                name: "Federal Watch Archive",
                url: "../sites/federal-watch-archive/index.html"
            }
        ]
    },

    personal: {
        name: "Personal Pages Ring",
        sites: [
            {
                id: "crystal-unicorns",
                name: "Crystal Moonbeam's Unicorn Emporium",
                url: "../sites/crystal-unicorns/index.html"
            },
            {
                id: "steves-hamster",
                name: "Steve's Amazing Hamster Paradise",
                url: "../sites/steves-hamster/index.html"
            },
            {
                id: "tamagotchi-heaven",
                name: "Tamagotchi Heaven",
                url: "../sites/tamagotchi-heaven/index.html"
            }
        ]
    },

    professional: {
        name: "Professional Web Ring",
        sites: [
            {
                id: "webmaster-dave",
                name: "Webmaster Dave's Digital Design",
                url: "../sites/webmaster-dave/index.html"
            }
        ]
    },

    extreme: {
        name: "Extreme Sports Ring",
        sites: [
            {
                id: "xtreme-sports",
                name: "Brad's Xtreme Sports Page",
                url: "../sites/xtreme-sports/index.html"
            }
        ]
    },

    anime: {
        name: "Anime & Manga Ring",
        sites: [
            {
                id: "anime-shrine",
                name: "Akira's Anime Shrine",
                url: "../sites/anime-shrine/index.html"
            }
        ]
    },

    collectibles: {
        name: "Collectibles Ring",
        sites: [
            {
                id: "beanie-baby-haven",
                name: "Janet's Beanie Baby Haven",
                url: "../sites/beanie-baby-haven/index.html"
            }
        ]
    },

    music: {
        name: "Alternative Music Ring",
        sites: [
            {
                id: "neon-shadows",
                name: "The Neon Shadows",
                url: "../sites/neon-shadows/index.html"
            }
        ]
    },

    community: {
        name: "Community Ring",
        sites: [
            {
                id: "classifieds",
                name: "CyberFind Classifieds",
                url: "../classifieds/index.html"
            },
            {
                id: "dating",
                name: "CyberFind Dating",
                url: "../dating/index.html"
            }
        ]
    }
};

/**
 * Navigate within a web ring
 * @param {string} ringName - Name of the ring (e.g., 'pokemon', 'conspiracy')
 * @param {string} currentSiteId - ID of the current site
 * @param {string} direction - 'next', 'prev', or 'random'
 */
function navigateWebRing(ringName, currentSiteId, direction) {
    var ring = WebRings[ringName];
    if (!ring || !ring.sites || ring.sites.length === 0) {
        alert("Web ring not found or empty!");
        return;
    }

    var currentIndex = -1;

    // Find current site index
    for (var i = 0; i < ring.sites.length; i++) {
        if (ring.sites[i].id === currentSiteId) {
            currentIndex = i;
            break;
        }
    }

    var targetIndex;
    var targetSite;

    switch (direction) {
        case 'next':
            targetIndex = (currentIndex + 1) % ring.sites.length;
            break;
        case 'prev':
            targetIndex = (currentIndex - 1 + ring.sites.length) % ring.sites.length;
            break;
        case 'random':
            do {
                targetIndex = Math.floor(Math.random() * ring.sites.length);
            } while (targetIndex === currentIndex && ring.sites.length > 1);
            break;
        default:
            alert("Invalid navigation direction!");
            return;
    }

    targetSite = ring.sites[targetIndex];
    if (targetSite && targetSite.url) {
        // Check if URL needs adjustment for relative paths
        var url = targetSite.url;

        // If we're in a site subdirectory, adjust path
        if (window.location.pathname.indexOf('/sites/') !== -1) {
            url = targetSite.url;
        } else if (window.location.pathname.indexOf('/webrings/') !== -1) {
            url = targetSite.url.replace('../sites/', '../sites/');
        }

        window.location.href = url;
    } else {
        alert("Target site not found!");
    }
}

/**
 * Generate web ring navigation HTML
 * @param {string} ringName - Name of the ring
 * @param {string} currentSiteId - ID of the current site
 * @param {object} options - Styling options
 */
function generateWebRingNav(ringName, currentSiteId, options) {
    options = options || {};
    var ring = WebRings[ringName];

    if (!ring) {
        return '<p>Web ring not found!</p>';
    }

    var bgColor = options.bgColor || '#FFFF00';
    var textColor = options.textColor || '#000000';
    var linkColor = options.linkColor || '#FF0000';
    var borderColor = options.borderColor || '#000000';
    var ringUrl = options.ringUrl || ('../../webrings/' + ringName + '-ring.html');
    var joinUrl = options.joinUrl || ('../../webrings/' + ringName + '-join.html');

    var html = '<table border="2" bgcolor="' + bgColor + '" cellpadding="5" cellspacing="0" bordercolor="' + borderColor + '">';
    html += '<tr><td align="center">';
    html += '<font size="2" color="' + textColor + '"><b>' + ring.name + '</b><br>';
    html += '[<a href="javascript:navigateWebRing(\'' + ringName + '\', \'' + currentSiteId + '\', \'prev\')"><font color="' + linkColor + '">Previous</font></a>]';
    html += ' [<a href="javascript:navigateWebRing(\'' + ringName + '\', \'' + currentSiteId + '\', \'random\')"><font color="' + linkColor + '">Random</font></a>]';
    html += ' [<a href="javascript:navigateWebRing(\'' + ringName + '\', \'' + currentSiteId + '\', \'next\')"><font color="' + linkColor + '">Next</font></a>]<br>';
    html += '[<a href="' + ringUrl + '"><font color="' + linkColor + '">List Sites</font></a>]';
    html += ' [<a href="' + joinUrl + '"><font color="' + linkColor + '">Join Ring</font></a>]';
    html += '</font></td></tr></table>';

    return html;
}

/**
 * Simple navigation functions for backward compatibility
 */
function navigatePokemonRing(direction) {
    navigateWebRing('pokemon', 'bobby-pokemon', direction);
}

function navigateConspiracyRing(direction) {
    navigateWebRing('conspiracy', 'truth-seekers', direction);
}

function navigatePersonalRing(direction) {
    navigateWebRing('personal', 'crystal-unicorns', direction);
}

// Random site function for web ring central
function goToRandomRingSite() {
    var allRings = Object.keys(WebRings);
    var randomRing = allRings[Math.floor(Math.random() * allRings.length)];
    var ring = WebRings[randomRing];
    var randomSite = ring.sites[Math.floor(Math.random() * ring.sites.length)];

    window.location.href = randomSite.url;
}

// Initialize web ring navigation when page loads
if (typeof window !== 'undefined' && window.document) {
    window.WebRings = WebRings;
    window.navigateWebRing = navigateWebRing;
    window.generateWebRingNav = generateWebRingNav;
    window.navigatePokemonRing = navigatePokemonRing;
    window.navigateConspiracyRing = navigateConspiracyRing;
    window.navigatePersonalRing = navigatePersonalRing;
    window.goToRandomRingSite = goToRandomRingSite;
}