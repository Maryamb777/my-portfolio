import { Navbar } from './components/navbar.js';
import { setupThemeToggle } from './components/theme.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').innerHTML = Navbar();
    setupThemeToggle();
    navigateTo('home');
});

window.navigateTo = async (page) => {
    const content = document.getElementById('content');
    try {
        const response = await fetch(`routes/${page}.html`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        content.innerHTML = html;
    } catch (error) {
        content.innerHTML = `<p>Cannot load page: ${page}.html</p>`;
    }
};
