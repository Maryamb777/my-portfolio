export function Navbar() {
    return `
        <nav class="nav-menu">
            <div class="container">
                <a href="routes/home" class="brand" onclick="navigateTo('home')">Badghisi</a>
                <div class="menu">
                    <a href="#" onclick="navigateTo('skills')">Skills</a>
                    <a href="#" onclick="navigateTo('projects')">Projects</a>
                    <a href="#" onclick="navigateTo('experience')">Experience</a>
                    <a href="#" onclick="navigateTo('education')">Education</a>
                    <a href="#" onclick="navigateTo('resume')">Resumé</a>
                </div>
                <div class="icons">
                    <button id="theme-toggle"><img src="assets/icons/sun.svg" alt="Toggle Theme"></button>
                </div>
            </div>
        </nav>
    `;
}
