// JavaScript for the hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});
