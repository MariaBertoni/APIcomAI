async function submitForm() {
    const nome = document.getElementById('nome').value.trim()
    const idade = document.getElementById('idade').value.trim()
    const personalidade = document.getElementById('personalidade').value.trim()
    const raca = document.getElementById('raca').value.trim()
    const genero = document.getElementById('genero').value.trim()
    const poderes = document.getElementById('poderes').value.trim()
    const objetivo = document.getElementById('objetivo').value.trim()
    const ponto_partida = document.getElementById('ponto_partida').value.trim()
    const ponto_final = document.getElementById('ponto_final').value.trim()
    const tempo = document.getElementById('tempo').value.trim()
    const genero_historia = document.getElementById('genero_historia').value.trim()
    const publico_alvo = document.getElementById('publico_alvo').value.trim()
    const elementos = document.getElementById('elementos').value.trim()
    const personagens = document.getElementById('personagens').value.trim()

    if (!nome || !idade || !personalidade || !raca || !genero || !poderes || !objetivo || 
        !ponto_partida || !ponto_final || !tempo || !genero_historia || !publico_alvo || 
        !elementos || !personagens) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return;
    }

    const data = {
        nome,
        idade,
        personalidade,
        raca,
        genero,
        poderes,
        objetivo,
        ponto_partida,
        ponto_final,
        tempo,
        genero_historia,
        publico_alvo,
        elementos,
        personagens
    };

    try {
        const response = await fetch('http://localhost:5000/historia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json()
        if (result.resposta) {
            localStorage.setItem('historia', JSON.stringify(result.resposta))
            window.location.href = 'final.html'
        } else {
            alert(`Erro: ${result.Erro}`)
        }
    } catch (error) {
        alert(`Erro: ${error.message}`)
    }
}

document.getElementById('submit-button').addEventListener('click', submitForm)