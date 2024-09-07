function calcularNota() {
    // Obter os valores dos campos
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("not1").value);
    var nota2 = parseFloat(document.getElementById("not2").value);
    var nota3 = parseFloat(document.getElementById("not3").value);
    var presenca = parseFloat(document.getElementById("pren").value);

    // Calcular a média
    var media = (nota1 + nota2 + nota3) / 3;

    // Determinar o status do aluno
    var resultado = "";
    if (presenca >= 75) {
        if (media >= 7) {
            resultado = `Aluno: ${nome}<br/>Média: ${media}<br/>Status: Aprovado`;
        } else if (media >= 5) {
            resultado = `Aluno: ${nome}<br/>Média: ${media}<br/>Status: Em exame`;
        } else {
            resultado = `Aluno: ${nome}<br/>Média: ${media}<br/>Status: Reprovado`;
        }
    } else {
        resultado = `Aluno: ${nome}<br/>Status: Reprovado por falta de presença suficiente`;
    }

    // Exibir o resultado
    document.body.innerHTML += `<div>${resultado}</div>`;
}
