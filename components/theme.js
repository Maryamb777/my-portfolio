export function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const themeIcon = themeToggle.querySelector('img');
        if (body.classList.contains('dark')) {
            themeIcon.src = 'assets/icons/moon.svg';
        } else {
            themeIcon.src = 'assets/icons/sun.svg';
        }
    });
}
