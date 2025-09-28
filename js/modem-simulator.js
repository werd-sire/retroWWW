/**
 * RetroWeb 56k Modem Loading Simulator
 * Simulates dial-up internet loading experience in a fun, non-frustrating way
 */

// Global configuration
var ModemSimulator = {
    enabled: true,
    soundEnabled: false, // Can be toggled by user
    skipOnClick: true,

    // Timing configuration (in milliseconds)
    timing: {
        textDelay: 100,        // Delay between text chunks
        imageStartDelay: 300,  // When images start loading after text
        imageLineDelay: 50,    // Delay between image lines
        elementStagger: 200,   // Stagger between different elements
        maxTotalTime: 3000     // Maximum total loading time
    },

    // Initialize the simulator
    init: function() {
        if (!this.enabled) return;

        this.addStyles();
        this.prepareContent();
        this.startLoading();
        this.addSkipListener();
    },

    // Add necessary CSS styles
    addStyles: function() {
        var style = document.createElement('style');
        style.innerHTML = `
            /* Loading simulation styles */
            .modem-loading {
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .modem-loaded {
                opacity: 1;
            }

            .modem-image-loading {
                position: relative;
                overflow: hidden;
            }

            .modem-image-loading::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(to bottom,
                    rgba(192,192,192,0.8) 0%,
                    rgba(192,192,192,0.8) 50%,
                    transparent 50%);
                animation: modem-scan 2s ease-out forwards;
                pointer-events: none;
            }

            @keyframes modem-scan {
                0% {
                    background-position: 0 -100%;
                }
                100% {
                    background-position: 0 100%;
                    opacity: 0;
                }
            }

            .modem-text-loading {
                overflow: hidden;
                white-space: nowrap;
                animation: modem-typewriter 1.5s steps(40) forwards;
            }

            @keyframes modem-typewriter {
                0% {
                    width: 0;
                }
                100% {
                    width: 100%;
                }
            }

            .modem-loading-indicator {
                position: fixed;
                top: 10px;
                right: 10px;
                background: #C0C0C0;
                border: 2px inset #C0C0C0;
                padding: 5px 10px;
                font-family: MS Sans Serif, sans-serif;
                font-size: 11px;
                z-index: 9999;
                display: none;
            }

            .modem-loading-indicator.active {
                display: block;
            }

            .modem-progress {
                width: 150px;
                height: 16px;
                border: 1px inset #C0C0C0;
                background: white;
                margin-top: 3px;
                position: relative;
            }

            .modem-progress-bar {
                height: 100%;
                background: linear-gradient(to right, #0000FF, #0080FF);
                width: 0%;
                animation: modem-progress 2.5s ease-out forwards;
            }

            @keyframes modem-progress {
                0% { width: 0%; }
                20% { width: 15%; }
                40% { width: 35%; }
                60% { width: 60%; }
                80% { width: 85%; }
                100% { width: 100%; }
            }

            /* Hide content initially */
            body.modem-simulation .modem-content {
                opacity: 0;
            }

            /* Skip button */
            .modem-skip {
                position: fixed;
                bottom: 10px;
                right: 10px;
                background: #E0E0E0;
                border: 2px outset #C0C0C0;
                padding: 3px 8px;
                font-family: MS Sans Serif, sans-serif;
                font-size: 11px;
                cursor: pointer;
                z-index: 9999;
                display: none;
            }

            .modem-skip.active {
                display: block;
            }

            .modem-skip:hover {
                background: #F0F0F0;
            }

            .modem-skip:active {
                border: 2px inset #C0C0C0;
            }
        `;
        document.head.appendChild(style);
    },

    // Prepare content for loading simulation
    prepareContent: function() {
        // Add body class for simulation
        document.body.className += ' modem-simulation';

        // Find and prepare images
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].className += ' modem-content modem-loading';
        }

        // Find and prepare text content (paragraphs, divs with text)
        var textElements = [];
        var paragraphs = document.getElementsByTagName('p');
        var divs = document.getElementsByTagName('div');
        var tds = document.getElementsByTagName('td');

        // Collect text elements
        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i].innerHTML.length > 20) {
                textElements.push(paragraphs[i]);
            }
        }

        for (var i = 0; i < divs.length; i++) {
            if (divs[i].innerHTML.length > 20 && !divs[i].querySelector('img')) {
                textElements.push(divs[i]);
            }
        }

        // Mark text elements for loading
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].className += ' modem-content modem-loading';
        }

        this.textElements = textElements;
        this.images = images;
    },

    // Start the loading simulation
    startLoading: function() {
        var self = this;

        // Show loading indicator
        this.showLoadingIndicator();

        // Show skip button
        this.showSkipButton();

        // Load text content first (dial-up prioritized text)
        setTimeout(function() {
            self.loadTextContent();
        }, 200);

        // Load images after text
        setTimeout(function() {
            self.loadImages();
        }, this.timing.imageStartDelay);

        // Hide loading indicator after everything loads
        setTimeout(function() {
            self.hideLoadingIndicator();
            self.hideSkipButton();
        }, this.timing.maxTotalTime);
    },

    // Load text content with staggered timing
    loadTextContent: function() {
        var self = this;

        for (var i = 0; i < this.textElements.length; i++) {
            (function(element, index) {
                setTimeout(function() {
                    element.className = element.className.replace('modem-loading', 'modem-loaded');

                    // Add typewriter effect to first few elements
                    if (index < 3 && element.innerHTML.length < 100) {
                        element.className += ' modem-text-loading';
                    }
                }, index * self.timing.elementStagger);
            })(this.textElements[i], i);
        }
    },

    // Load images with progressive scanning effect
    loadImages: function() {
        var self = this;

        for (var i = 0; i < this.images.length; i++) {
            (function(img, index) {
                setTimeout(function() {
                    img.className += ' modem-image-loading';
                    img.className = img.className.replace('modem-loading', 'modem-loaded');
                }, index * self.timing.elementStagger);
            })(this.images[i], i);
        }
    },

    // Show loading indicator
    showLoadingIndicator: function() {
        var indicator = document.createElement('div');
        indicator.className = 'modem-loading-indicator active';
        indicator.innerHTML = 'Loading page...<div class="modem-progress"><div class="modem-progress-bar"></div></div>';
        document.body.appendChild(indicator);
        this.loadingIndicator = indicator;
    },

    // Hide loading indicator
    hideLoadingIndicator: function() {
        if (this.loadingIndicator) {
            this.loadingIndicator.className = 'modem-loading-indicator';
            var self = this;
            setTimeout(function() {
                if (self.loadingIndicator && self.loadingIndicator.parentNode) {
                    self.loadingIndicator.parentNode.removeChild(self.loadingIndicator);
                }
            }, 500);
        }
    },

    // Show skip button
    showSkipButton: function() {
        if (!this.skipOnClick) return;

        var skipBtn = document.createElement('div');
        skipBtn.className = 'modem-skip active';
        skipBtn.innerHTML = 'Skip loading';
        skipBtn.onclick = this.skipLoading.bind(this);
        document.body.appendChild(skipBtn);
        this.skipButton = skipBtn;
    },

    // Hide skip button
    hideSkipButton: function() {
        if (this.skipButton) {
            this.skipButton.className = 'modem-skip';
            var self = this;
            setTimeout(function() {
                if (self.skipButton && self.skipButton.parentNode) {
                    self.skipButton.parentNode.removeChild(self.skipButton);
                }
            }, 500);
        }
    },

    // Skip loading animation
    skipLoading: function() {
        // Immediately show all content
        var loadingElements = document.querySelectorAll('.modem-loading');
        for (var i = 0; i < loadingElements.length; i++) {
            loadingElements[i].className = loadingElements[i].className.replace('modem-loading', 'modem-loaded');
        }

        this.hideLoadingIndicator();
        this.hideSkipButton();
    },

    // Add click listener to skip on any click
    addSkipListener: function() {
        if (!this.skipOnClick) return;

        var self = this;
        var hasSkipped = false;

        function skipOnClick() {
            if (!hasSkipped) {
                hasSkipped = true;
                self.skipLoading();
                document.removeEventListener('click', skipOnClick);
            }
        }

        // Wait a bit before enabling click-to-skip
        setTimeout(function() {
            document.addEventListener('click', skipOnClick);
        }, 1000);
    }
};

// Auto-initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        ModemSimulator.init();
    });
} else {
    ModemSimulator.init();
}

// Allow manual initialization
window.ModemSimulator = ModemSimulator;