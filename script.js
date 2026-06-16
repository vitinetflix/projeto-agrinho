// Array de dicas ambientais
const dicas = [
    "Apague as luzes ao sair de um cômodo.",
    "Evite plásticos descartáveis.",
    "Use transporte público ou bicicleta sempre que possível.",
    "Recicle papel, vidro e plástico.",
    "Plante uma árvore em sua comunidade."
];

// Botão para mostrar dica
document.getElementById("btnMensagem").addEventListener("click", () => {
    const dica = dicas[Math.floor(Math.random() * dicas.length)];
    alert("💡 Dica Ambiental:\n\n" + dica);
});

// Função de quiz
function verificarResposta(resposta){
    const resultado = document.getElementById("resultado");

    if(resposta === "bicicleta"){
        resultado.textContent = "✅ Correto! Andar de bicicleta ajuda a reduzir emissão de CO₂.";
        resultado.style.color = "lightgreen";
    } else {
        resultado.textContent = "❌ Resposta incorreta. A resposta correta é andar de bicicleta.";
        resultado.style.color = "tomato";
    }
}
