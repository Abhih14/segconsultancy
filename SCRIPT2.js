document.addEventListener('DOMContentLoaded', () => {
    const legaliteitenBtn = document.getElementById('legaliteiten-btn');
    const overSegBtn = document.getElementById('over-seg-btn');
    const contactBtn = document.getElementById('contact-btn');
    const legaliteitenSubmenu = document.getElementById('legaliteiten-submenu');
    const overSegSubmenu = document.getElementById('over-seg-submenu');

    legaliteitenBtn.addEventListener('click', () => {
        toggleSubmenu(legaliteitenSubmenu);
    });

    overSegBtn.addEventListener('click', () => {
        toggleSubmenu(overSegSubmenu);
    });

    contactBtn.addEventListener('click', () => {
        closeAllSubmenus();
    });

    function toggleSubmenu(submenu) {
        const isVisible = submenu.style.display === 'block';
        closeAllSubmenus();
        if (!isVisible) {
            submenu.style.display = 'block';
        }
    }

    function closeAllSubmenus() {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});
