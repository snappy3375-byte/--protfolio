// 1. Mouse Tracking Purple Glow Effect
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});

// 2. Vercel Sliding Pill Navbar Animation
const navContainer = document.querySelector('.nav-container');
const navPill = document.getElementById('navPill');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        const containerRect = navContainer.getBoundingClientRect();

        navPill.style.width = `${rect.width}px`;
        navPill.style.height = `${rect.height}px`;
        navPill.style.left = `${rect.left - containerRect.left}px`;
        navPill.style.top = `${rect.top - containerRect.top}px`;
        navPill.style.opacity = '1';
    });
});

navContainer.addEventListener('mouseleave', () => {
    navPill.style.opacity = '0';
});