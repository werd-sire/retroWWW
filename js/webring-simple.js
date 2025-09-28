/**
 * Simple Web Ring System for RetroWeb
 * Standalone, inline implementation that works without external dependencies
 */

// Simple inline web ring navigation - copy this directly into your HTML
var SimpleWebRing = {
    // Pokemon Ring
    pokemon: {
        sites: [
            { id: 'bobby-pokemon', url: '/sites/geocities-fan/index.html', name: "Bobby's Pokemon Page" },
            { id: 'sarah-pokemon', url: '/sites/pokemon-paradise/index.html', name: "Sarah's Pokemon Paradise" }
        ],
        getNav: function(currentId) {
            var ring = SimpleWebRing.pokemon.sites;
            var current = -1;
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].id === currentId) { current = i; break; }
            }
            if (current === -1) current = 0;
            var prev = ring[(current - 1 + ring.length) % ring.length];
            var next = ring[(current + 1) % ring.length];
            var random = ring[Math.floor(Math.random() * ring.length)];
            return { prev: prev, next: next, random: random };
        }
    },

    // Conspiracy Ring
    conspiracy: {
        sites: [
            { id: 'truth-seekers', url: '/sites/truth-seekers/index.html', name: 'Truth Seekers Network' },
            { id: 'federal-watch', url: '/sites/federal-watch-archive/index.html', name: 'Federal Watch Archive' }
        ],
        getNav: function(currentId) {
            var ring = SimpleWebRing.conspiracy.sites;
            var current = -1;
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].id === currentId) { current = i; break; }
            }
            if (current === -1) current = 0;
            var prev = ring[(current - 1 + ring.length) % ring.length];
            var next = ring[(current + 1) % ring.length];
            var random = ring[Math.floor(Math.random() * ring.length)];
            return { prev: prev, next: next, random: random };
        }
    },

    // Personal Ring
    personal: {
        sites: [
            { id: 'crystal-unicorns', url: '/sites/crystal-unicorns/index.html', name: "Crystal's Unicorns" },
            { id: 'steves-hamster', url: '/sites/steves-hamster/index.html', name: "Steve's Hamsters" },
            { id: 'tamagotchi-heaven', url: '/sites/tamagotchi-heaven/index.html', name: 'Tamagotchi Heaven' }
        ],
        getNav: function(currentId) {
            var ring = SimpleWebRing.personal.sites;
            var current = -1;
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].id === currentId) { current = i; break; }
            }
            if (current === -1) current = 0;
            var prev = ring[(current - 1 + ring.length) % ring.length];
            var next = ring[(current + 1) % ring.length];
            var random = ring[Math.floor(Math.random() * ring.length)];
            return { prev: prev, next: next, random: random };
        }
    },

    // Music Ring
    music: {
        sites: [
            { id: 'neon-shadows', url: '/sites/neon-shadows/index.html', name: 'The Neon Shadows' }
        ],
        getNav: function(currentId) {
            var ring = SimpleWebRing.music.sites;
            var current = -1;
            for (var i = 0; i < ring.length; i++) {
                if (ring[i].id === currentId) { current = i; break; }
            }
            if (current === -1) current = 0;
            // For single-site rings, all links go to the same place
            var site = ring[0];
            return { prev: site, next: site, random: site };
        }
    },

    // Helper to adjust URLs based on current location
    adjustPath: function(url) {
        // Get current path depth
        var depth = (window.location.pathname.match(/\//g) || []).length - 1;
        var prefix = '';

        // If we're in /sites/something/, we need to go up 2 levels
        if (window.location.pathname.indexOf('/sites/') > -1) {
            prefix = '../..';
        }
        // If we're in root www/, no prefix needed
        else if (depth <= 1) {
            prefix = '';
        }
        // Otherwise, go up one level
        else {
            prefix = '..';
        }

        // Remove leading slash from URL if prefix exists
        if (prefix && url.charAt(0) === '/') {
            url = url.substring(1);
        }

        return prefix ? prefix + url : url;
    }
};