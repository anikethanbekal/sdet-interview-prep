// Custom JavaScript for Unified Coding Hub

document.addEventListener('DOMContentLoaded', () => {
    console.log('Unified Coding Hub custom JavaScript loaded!');

    // Open external links in a new tab for better user experience
    document.querySelectorAll('a').forEach(link => {
        // Check if the link's hostname is different from the current site's hostname
        // and that it's not an internal anchor link
        if (link.hostname !== window.location.hostname && link.hostname !== '' && !link.href.startsWith('#')) {
            link.setAttribute('target', '_blank'); // Open in new tab
            link.setAttribute('rel', 'noopener noreferrer'); // Security best practice
            link.classList.add('external-link'); // Add a class for potential styling
        }
    });

    // Smooth scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });

    // Example: Add a dynamic year to a footer element if you have one
    // In your mkdocs.yml, under `extra`, you could add `extra: { year: 2024 }`
    // And in a custom footer override, `<span id="current-year">{{ config.extra.year }}</span>`
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});
