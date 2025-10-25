/**
 * RetroWeb Site Generator
 * Templates and utilities for creating new 90s-style websites
 */

var SiteTemplates = {
    // Band/Music Site Template
    band: {
        structure: {
            pages: ["index.html", "bio.html", "shows.html", "demos.html", "fanmail.html"],
            assets: ["band-photo.jpg", "logo.gif", "background.gif"],
            midi: "theme-song.mid"
        },

        colorSchemes: {
            grunge: {
                bg: "#000000",
                text: "#FFFFFF",
                links: "#FFFF00",
                accent: "#FF0000",
                description: "Black background with bright accents"
            },
            neon: {
                bg: "#FF00FF",
                text: "#00FFFF",
                links: "#FFFF00",
                accent: "#00FF00",
                description: "Bright neon colors"
            },
            metal: {
                bg: "#330000",
                text: "#CCCCCC",
                links: "#FF6666",
                accent: "#FFCC00",
                description: "Dark red with metal accents"
            }
        },

        elements: {
            header: "Band logo with animated flames/effects",
            navigation: "Torn paper or grunge-style menu",
            content: "Concert photos, show listings, demo tracks",
            sidebar: "Fan testimonials, show countdown",
            footer: "Contact info, record label links"
        },

        webRingCategories: ["music", "personal", "local"]
    },

    // Gaming Site Template
    gaming: {
        structure: {
            pages: ["index.html", "reviews.html", "cheats.html", "downloads.html", "links.html"],
            assets: ["game-logos/", "screenshots/", "animated-gifs/"],
            midi: "game-music.mid"
        },

        colorSchemes: {
            retro: {
                bg: "#000080",
                text: "#00FF00",
                links: "#FFFF00",
                accent: "#FF00FF",
                description: "Classic console colors"
            },
            arcade: {
                bg: "#000000",
                text: "#FFFFFF",
                links: "#FF0000",
                accent: "#00FFFF",
                description: "Arcade cabinet style"
            }
        },

        webRingCategories: ["gaming", "personal"]
    },

    // Movie Fan Site Template
    movie: {
        structure: {
            pages: ["index.html", "plot.html", "cast.html", "gallery.html", "trivia.html"],
            assets: ["movie-stills/", "cast-photos/", "promotional/"],
            midi: "movie-theme.mid"
        },

        colorSchemes: {
            matrix: {
                bg: "#000000",
                text: "#00FF00",
                links: "#FFFFFF",
                accent: "#FF0000",
                description: "Matrix-inspired green on black"
            },
            titanic: {
                bg: "#000080",
                text: "#FFFFFF",
                links: "#87CEEB",
                accent: "#FFD700",
                description: "Ocean blue with gold accents"
            }
        },

        webRingCategories: ["entertainment", "personal"]
    },

    // Personal Homepage Template
    personal: {
        structure: {
            pages: ["index.html", "about.html", "interests.html", "photos.html", "guestbook.html"],
            assets: ["family-photos/", "pet-photos/", "hobby-images/"],
            midi: "favorite-song.mid"
        },

        colorSchemes: {
            family: {
                bg: "#FFFFCC",
                text: "#000000",
                links: "#0000FF",
                accent: "#FF0000",
                description: "Warm family-friendly colors"
            },
            teen: {
                bg: "#FF69B4",
                text: "#FFFFFF",
                links: "#FFFF00",
                accent: "#00FFFF",
                description: "Bright teen colors"
            }
        },

        webRingCategories: ["personal"]
    },

    // Tech/Computing Site Template
    tech: {
        structure: {
            pages: ["index.html", "tutorials.html", "downloads.html", "hardware.html", "links.html"],
            assets: ["computer-photos/", "diagrams/", "tech-gifs/"],
            midi: "electronic-music.mid"
        },

        colorSchemes: {
            terminal: {
                bg: "#000000",
                text: "#00FF00",
                links: "#FFFFFF",
                accent: "#FFFF00",
                description: "Terminal green on black"
            },
            windows: {
                bg: "#C0C0C0",
                text: "#000000",
                links: "#0000FF",
                accent: "#FF0000",
                description: "Windows 95 gray scheme"
            }
        },

        webRingCategories: ["tech", "professional"]
    }
};

/**
 * Generate site structure for a new website
 * @param {string} templateType - Template type (band, gaming, movie, etc.)
 * @param {object} siteData - Site-specific data
 * @returns {object} - Generated site structure
 */
function generateSite(templateType, siteData) {
    var template = SiteTemplates[templateType];
    if (!template) {
        throw new Error("Template type '" + templateType + "' not found");
    }

    var site = {
        template: templateType,
        siteName: siteData.siteName || "Untitled Site",
        webmaster: siteData.webmaster || "Anonymous Webmaster",
        founded: siteData.founded || getCurrentDate(),
        description: siteData.description || "A cool 90s website",

        // Template structure
        pages: template.structure.pages,
        assets: template.structure.assets,
        midi: template.structure.midi,

        // Color scheme
        colorScheme: siteData.colorScheme || Object.keys(template.colorSchemes)[0],
        colors: template.colorSchemes[siteData.colorScheme] || template.colorSchemes[Object.keys(template.colorSchemes)[0]],

        // Web ring assignments
        suggestedRings: template.webRingCategories,

        // Generated paths
        basePath: "sites/" + (siteData.siteId || sanitizeName(siteData.siteName)),

        // Auto-generated content suggestions
        contentSuggestions: generateContentSuggestions(templateType, siteData)
    };

    return site;
}

/**
 * Generate HTML for a site page
 * @param {object} siteConfig - Site configuration
 * @param {string} pageType - Type of page (index, bio, etc.)
 * @param {object} pageData - Page-specific data
 * @returns {string} - Generated HTML
 */
function generatePageHTML(siteConfig, pageType, pageData) {
    var html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n';
    html += '<html>\n<head>\n';
    html += '<title>' + (pageData.title || siteConfig.siteName) + '</title>\n';
    html += '<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">\n';
    html += generateMetaTags(siteConfig, pageData);
    html += generateCSS(siteConfig);
    html += generateJavaScript(siteConfig, pageType);
    html += '</head>\n\n';

    html += '<body bgcolor="' + siteConfig.colors.bg + '" text="' + siteConfig.colors.text + '"';
    html += ' link="' + siteConfig.colors.links + '" vlink="' + siteConfig.colors.accent + '">\n\n';

    html += generateHeader(siteConfig, pageType);
    html += generateNavigation(siteConfig, pageType);
    html += generateMainContent(siteConfig, pageType, pageData);
    html += generateSidebar(siteConfig, pageType);
    html += generateFooter(siteConfig);
    html += generateWebRingNavigation(siteConfig);

    html += '\n</body>\n</html>';

    return html;
}

/**
 * Generate content suggestions based on template type
 */
function generateContentSuggestions(templateType, siteData) {
    var suggestions = {
        band: {
            bioContent: [
                "Band formation story",
                "Member introductions with terrible photos",
                "Musical influences and style",
                "Recording history and demo tapes",
                "Local scene connections"
            ],
            showContent: [
                "Upcoming gig listings",
                "Past show reviews and photos",
                "Venue contact information",
                "Set list archives",
                "Fan testimonials from shows"
            ],
            demoContent: [
                "Song previews with RealPlayer links",
                "Recording studio photos",
                "Lyrics and song meanings",
                "Demo tape ordering info",
                "Fan reviews of songs"
            ]
        },
        gaming: {
            reviewContent: [
                "Latest game reviews with scores",
                "Retro game retrospectives",
                "Console comparisons",
                "Screenshot galleries",
                "Personal gaming setup photos"
            ],
            cheatContent: [
                "Game Genie codes",
                "Easter egg discoveries",
                "Strategy guides and walkthroughs",
                "High score achievements",
                "Secret character unlocks"
            ]
        },
        movie: {
            plotContent: [
                "Detailed plot summary (with spoiler warnings)",
                "Character analysis",
                "Themes and symbolism",
                "Director's vision",
                "Comparison to source material"
            ],
            castContent: [
                "Actor biographies and filmographies",
                "Behind-the-scenes stories",
                "Interview excerpts",
                "Character development notes",
                "Casting trivia"
            ]
        }
    };

    return suggestions[templateType] || {};
}

/**
 * Generate CSS styles for the site
 */
function generateCSS(siteConfig) {
    var css = '<style type="text/css">\n<!--\n';
    css += 'BODY { font-family: Arial, Helvetica, sans-serif; }\n';
    css += 'A:link { color: ' + siteConfig.colors.links + '; text-decoration: underline; }\n';
    css += 'A:visited { color: ' + siteConfig.colors.accent + '; text-decoration: underline; }\n';
    css += 'A:hover { color: #FFFFFF; text-decoration: underline; }\n';
    css += '.header { font-family: Times, serif; font-weight: bold; }\n';
    css += '.small { font-size: 10px; }\n';
    css += '-->\n</style>\n';
    return css;
}

/**
 * Generate JavaScript for the site
 */
function generateJavaScript(siteConfig, pageType) {
    var js = '<script language="JavaScript">\n<!--\n';
    js += 'window.status = "Welcome to ' + siteConfig.siteName + '!";\n\n';

    // Add template-specific JavaScript
    if (siteConfig.template === 'band') {
        js += 'function showGigAlert() {\n';
        js += '    alert("Check out our next show! Details on the Shows page!");\n';
        js += '}\n\n';
    }

    js += '//-->\n</script>\n';
    return js;
}

/**
 * Generate site header
 */
function generateHeader(siteConfig, pageType) {
    var header = '<center>\n\n';
    header += '<!-- Header -->\n';
    header += '<table width="100%" border="3" cellpadding="10" cellspacing="0" ';
    header += 'bordercolor="' + siteConfig.colors.accent + '" bgcolor="' + siteConfig.colors.bg + '">\n';
    header += '<tr>\n<td align="center">\n';
    header += '<font class="header" size="6" color="' + siteConfig.colors.accent + '">';
    header += siteConfig.siteName.toUpperCase() + '</font>\n';
    header += '<br>\n<font size="2" color="' + siteConfig.colors.text + '">\n';
    header += '<i>' + siteConfig.description + '</i>\n';
    header += '</font>\n</td>\n</tr>\n</table>\n\n<br>\n\n';
    return header;
}

/**
 * Generate navigation menu
 */
function generateNavigation(siteConfig, pageType) {
    var nav = '<!-- Navigation -->\n';
    nav += '<table border="2" cellpadding="5" cellspacing="0" ';
    nav += 'bordercolor="' + siteConfig.colors.links + '" bgcolor="' + siteConfig.colors.accent + '">\n';
    nav += '<tr>\n';

    for (var i = 0; i < siteConfig.pages.length; i++) {
        var page = siteConfig.pages[i];
        var pageName = page.replace('.html', '').replace('index', 'home');
        nav += '<td><a href="' + page + '"><font color="' + siteConfig.colors.bg + '">';
        nav += '<b>' + pageName.toUpperCase() + '</b></font></a></td>\n';
    }

    nav += '</tr>\n</table>\n\n<br>\n\n';
    return nav;
}

/**
 * Generate main content area
 */
function generateMainContent(siteConfig, pageType, pageData) {
    var content = '<!-- Main Content -->\n';
    content += '<table width="600" border="1" cellpadding="15" cellspacing="0" ';
    content += 'bordercolor="' + siteConfig.colors.accent + '" bgcolor="' + siteConfig.colors.bg + '">\n';
    content += '<tr>\n<td>\n';
    content += '<font color="' + siteConfig.colors.text + '">\n';
    content += (pageData.content || '<p>Content goes here...</p>');
    content += '\n</font>\n</td>\n</tr>\n</table>\n\n<br>\n\n';
    return content;
}

/**
 * Generate sidebar
 */
function generateSidebar(siteConfig, pageType) {
    var sidebar = '<!-- Sidebar -->\n';
    sidebar += '<table width="200" border="1" cellpadding="8" cellspacing="0" ';
    sidebar += 'bordercolor="' + siteConfig.colors.links + '" bgcolor="' + siteConfig.colors.accent + '">\n';
    sidebar += '<tr>\n<td align="center">\n';
    sidebar += '<font size="2" color="' + siteConfig.colors.bg + '">\n';
    sidebar += '<b>Site Info</b><br>\n';
    sidebar += 'Webmaster: ' + siteConfig.webmaster + '<br>\n';
    sidebar += 'Founded: ' + siteConfig.founded + '<br>\n';
    sidebar += 'Last Updated: ' + getCurrentDate() + '\n';
    sidebar += '</font>\n</td>\n</tr>\n</table>\n\n<br>\n\n';
    return sidebar;
}

/**
 * Generate footer
 */
function generateFooter(siteConfig) {
    var footer = '<!-- Footer -->\n';
    footer += '<table width="600" border="0" cellpadding="10" cellspacing="0">\n';
    footer += '<tr>\n<td align="center">\n';
    footer += '<font class="small" color="' + siteConfig.colors.text + '">\n';
    footer += '&copy; ' + new Date().getFullYear() + ' ' + siteConfig.siteName + '. All Rights Reserved.<br>\n';
    footer += 'Best viewed at 800x600 resolution<br>\n';
    footer += 'Webmaster: <a href="mailto:webmaster@site.com">' + siteConfig.webmaster + '</a>\n';
    footer += '</font>\n</td>\n</tr>\n</table>\n\n';
    return footer;
}

/**
 * Generate web ring navigation
 */
function generateWebRingNavigation(siteConfig) {
    var webring = '<!-- Web Ring Navigation -->\n';
    webring += '<script language="JavaScript" src="../../js/webring-nav.js"></script>\n\n';
    return webring;
}

/**
 * Generate meta tags
 */
function generateMetaTags(siteConfig, pageData) {
    var meta = '<meta name="description" content="' + (pageData.description || siteConfig.description) + '">\n';
    meta += '<meta name="keywords" content="' + (pageData.keywords || generateKeywords(siteConfig)) + '">\n';
    return meta;
}

/**
 * Generate keywords based on site type
 */
function generateKeywords(siteConfig) {
    var baseKeywords = siteConfig.siteName.toLowerCase().split(' ');
    var templateKeywords = {
        band: ['music', 'band', 'rock', 'concerts', 'songs', 'albums'],
        gaming: ['games', 'video games', 'reviews', 'cheats', 'walkthroughs'],
        movie: ['movie', 'film', 'cinema', 'cast', 'plot', 'reviews'],
        personal: ['personal', 'homepage', 'family', 'interests', 'photos'],
        tech: ['technology', 'computers', 'software', 'hardware', 'tutorials']
    };

    var keywords = baseKeywords.concat(templateKeywords[siteConfig.template] || []);
    return keywords.join(', ');
}

/**
 * Utility functions
 */
function getCurrentDate() {
    var now = new Date();
    return (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
}

function sanitizeName(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
}

// Export functions
if (typeof window !== 'undefined') {
    window.SiteTemplates = SiteTemplates;
    window.generateSite = generateSite;
    window.generatePageHTML = generatePageHTML;
}