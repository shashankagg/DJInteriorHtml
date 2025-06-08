class SectionManager {
    constructor() {
        this.sections = ['livingRoom', 'basement', 'accentWall'];
        this.minHeight = '400px';
        this.animationDuration = 700;
        this.scrollDelay = 250;
        this.scrollOffset = 20;

        this.init();
    }

    init() {
        // Hide all sections initially
        this.sections.forEach(section => {
            $(`#${section}Sect`).hide();
        });

        // Set up event listeners
        this.sections.forEach(section => {
            $(`#${section}IndexDiv`).click(() => this.showSection(section));
            $(`#${section}Close`).click(() => this.hideSection(section));
        });
    }

    showSection(targetSection) {
        // Hide all other sections
        this.sections.forEach(section => {
            if (section !== targetSection) {
                $(`#${section}Sect`).hide(this.animationDuration);
            }
        });

        // Show target section
        const targetElement = document.getElementById(`${targetSection}Sect`);
        targetElement.style.minHeight = "0px";
        $(`#${targetSection}Sect`).show(this.animationDuration, () => {
            // Scroll after show animation completes
            if (!$(`#${targetSection}Sect`).is(':hidden')) {
                $('html, body').animate({
                    scrollTop: $(`#${targetSection}Sect`).offset().top - this.scrollOffset
                }, 500);
            }
        });
        targetElement.style.minHeight = this.minHeight;
    }

    hideSection(section) {
        const element = document.getElementById(`${section}Sect`);
        element.style.minHeight = "0px";
        $(`#${section}Sect`).hide(this.animationDuration);
        element.style.minHeight = this.minHeight;
    }
}

// Initialize when document is ready
$(document).ready(function() {
    new SectionManager();
});