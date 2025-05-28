// AGGIORNA ORARIO
function aggiornaOrario() {
    const data = new Date();
    const ore = String(data.getHours()).padStart(2, '0');
    const minuti = String(data.getMinutes()).padStart(2, '0');
    document.getElementById('orario').textContent = `${ore}:${minuti}`;
}

// Aggiorna l'orario ogni secondo
setInterval(aggiornaOrario, 1000);

// Esegui subito una volta all'avvio per evitare ritardi
aggiornaOrario();

