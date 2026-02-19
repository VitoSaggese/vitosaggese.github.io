// --- Gestione dell'Animazione Iniziale (Preloader) ---
// Usa DOMContentLoaded: più rapido e affidabile su connessioni mobile
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1800); 
});

// "Salvavita" per il mobile: forza la scomparsa del preloader dopo 3 secondi
// nel caso in cui il browser del telefono blocchi l'evento principale
setTimeout(() => {
    document.body.classList.add('loaded');
}, 3000);

// --- Gestione dello sfondo dinamico ---
const spaceBg = document.getElementById('space-bg');

window.addEventListener('mousemove', (e) => {
    spaceBg.style.setProperty('--mouse-x', `${e.clientX}px`);
    spaceBg.style.setProperty('--mouse-y', `${e.clientY}px`);
});

window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0]; 
    spaceBg.style.setProperty('--mouse-x', `${touch.clientX}px`);
    spaceBg.style.setProperty('--mouse-y', `${touch.clientY}px`);
}, { passive: true });
