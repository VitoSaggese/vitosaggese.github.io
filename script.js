// --- Gestione dell'Animazione Iniziale (Preloader) ---
window.addEventListener('load', () => {
    // Aggiungiamo un leggero ritardo (1800 millisecondi) per mostrare l'effetto transito
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1800); 
});

// --- Gestione dello sfondo che segue il cursore ---
const spaceBg = document.getElementById('space-bg');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    spaceBg.style.setProperty('--mouse-x', `${x}px`);
    spaceBg.style.setProperty('--mouse-y', `${y}px`);
});
