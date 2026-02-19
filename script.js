// Seleziona lo sfondo dinamico
const spaceBg = document.getElementById('space-bg');

// Ascolta il movimento del mouse su tutta la finestra
window.addEventListener('mousemove', (e) => {
    // Cattura le coordinate X e Y del mouse
    const x = e.clientX;
    const y = e.clientY;

    // Passa le variabili al CSS in tempo reale
    spaceBg.style.setProperty('--mouse-x', `${x}px`);
    spaceBg.style.setProperty('--mouse-y', `${y}px`);
});
