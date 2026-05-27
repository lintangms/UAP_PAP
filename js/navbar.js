document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        // Detect current page to set active tab
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'beranda.html';

        let berandaActive = '';
        let pertolonganActive = '';
        let kategoriActive = '';
        let tentangActive = '';

        if (page === 'beranda.html' || page === '') {
            berandaActive = 'active';
        } else if (page === 'pingsan.html') {
            kategoriActive = 'active';
        }

        navbarContainer.innerHTML = `
        <div class="container navbar-inner">
            <a href="beranda.html" class="brand">Rescue Guide</a>
            <nav class="nav-menu">
                <a href="beranda.html" class="nav-link ${berandaActive}">Beranda</a>
                <a href="#" class="nav-link ${pertolonganActive}">Pertolongan Pertama</a>
                <a href="pingsan.html" class="nav-link ${kategoriActive}">Kategori</a>
                <a href="#" class="nav-link ${tentangActive}">Tentang Kami</a>
            </nav>
            <div class="nav-actions">
                <a href="login.html" class="btn-text-nav">Masuk</a>
                <a href="register.html" class="btn-primary-nav">Daftar</a>
            </div>
        </div>`;
    }
});
