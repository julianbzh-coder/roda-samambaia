// Initialisation simple
const canvas = document.getElementById('canvas-wheel');
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
    console.log("App Initialisée");
    setupListeners();
});

function setupListeners() {
    // Bouton Play
    document.getElementById('btn-play').addEventListener('click', async () => {
        await Tone.start();
        console.log("Audio démarré");
        // Votre logique de lecture ici
    });

    // Gestion du fichier JSON
    document.getElementById('btn-load').addEventListener('click', () => {
        document.getElementById('file-input').click();
    });

    document.getElementById('file-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = JSON.parse(event.target.result);
            console.log("Données chargées:", data);
        };
        reader.readAsText(file);
    });
}
