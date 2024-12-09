document.addEventListener('DOMContentLoaded', function () {
    const scores = {
        comportamento: 0,
        cardiovascular: 0,
        respiratorio: 0,
        nebulizadores: 0,
        vomito: 0,
    };

    function updateScore() {
        const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
        document.getElementById('pews-score').innerText = totalScore;

        const intervention = document.getElementById('pews-intervention');
        const time = document.getElementById('pews-time');
        
        if (totalScore === 0) {
            intervention.innerText = "Manter rotina de avaliação. PEWS a cada 24 horas.";
            time.innerText = "Sinais Vitais de 6/6 horas";
        } else if (totalScore <= 2) {
            intervention.innerText = "Avaliação imediata do enfermeiro. Repetir PEWS em 60 minutos.";
            time.innerText = "Sinais Vitais de 4/4 horas";
        } else if (totalScore === 3) {
            intervention.innerText = "Avaliação do enfermeiro. Repetir PEWS em 30 minutos.";
            time.innerText = "Sinais Vitais de 2/2 horas";
        } else if (totalScore <= 6) {
            intervention.innerText = "Acompanhamento imediato. Repetir PEWS em 20 minutos.";
            time.innerText = "Sinais Vitais de 1/1 hora";
        } else {
            intervention.innerText = "Repetir PEWS imediatamente. Considerar Time de Resposta Rápida.";
            time.innerText = "Monitorização contínua";
        }
    }

    document.querySelectorAll('.score-button').forEach(button => {
        button.addEventListener('click', function () {
            const category = this.parentElement.parentElement.getAttribute('data-category');
            scores[category] = parseInt(this.dataset.score);
            
            // Remove a seleção anterior
            document.querySelectorAll(`.${category} .score-button`).forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
            
            // Adiciona a seleção atual
            this.classList.add('bg-blue-500', 'text-white');
            
            updateScore();
        });
    });
});
