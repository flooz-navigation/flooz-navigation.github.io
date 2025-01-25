// JavaScript for Flooz website

document.addEventListener('DOMContentLoaded', () => {
    // Example functionality: Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('Flooz website script initialized.');
});
