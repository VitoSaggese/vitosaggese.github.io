// --- Gestione dell'Animazione Iniziale (Preloader) ---
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1800); 
});

// --- Gestione dello sfondo dinamico ---
const spaceBg = document.getElementById('space-bg');

// 1. Funziona per chi usa il Mouse (PC)
window.addEventListener('mousemove', (e) => {
    spaceBg.style.setProperty('--mouse-x', `${e.clientX}px`);
    spaceBg.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// 2. Funziona per chi usa il Touch (Smartphone/Tablet)
window.addEventListener('touchmove', (e) => {
    // Prende le coordinate del primo dito che tocca lo schermo
    const touch = e.touches[0]; 
    spaceBg.style.setProperty('--mouse-x', `${touch.clientX}px`);
    spaceBg.style.setProperty('--mouse-y', `${touch.clientY}px`);
}, { passive: true }); // passive: true migliora le prestazioni su mobile
