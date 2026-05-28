document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {

        const path = window.location.pathname;
        const page = path.split('/').pop() || 'beranda.html';

        let berandaActive = '';
        let kategoriActive = '';
        let chatActive = '';
        let profileActive = '';

        if (page === 'beranda.html' || page === '' || page === 'index.html') {
            berandaActive = 'active';
        } else if (page === 'kategori.html' || page === 'pingsan.html') {
            kategoriActive = 'active';
        } else if (page === 'chat.html') {
            chatActive = 'active';
        } else if (page === 'profil.html') {
            profileActive = 'active';
        }

        navbarContainer.innerHTML = `
        <div class="container navbar-inner">
            <a href="beranda.html" class="brand">Rescue Guide</a>
            <nav class="nav-menu">
                <a href="beranda.html" class="nav-link ${berandaActive}">Beranda</a>
                <a href="kategori.html" class="nav-link ${kategoriActive}">Kategori</a>
                <a href="chat.html" class="nav-link ${chatActive}">Chat</a>
            </nav>
            <div class="nav-actions">
                <a href="profil.html" class="profile-nav-btn ${profileActive}" aria-label="Pengaturan Profil">
                    <svg class="profile-nav-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                </a>
            </div>
        </div>`;
    }
});
