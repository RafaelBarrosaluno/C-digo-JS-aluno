var nome = prompt("Digite o nome do aluno:");
var not1 = parseFloat(prompt("Digite a primeira nota"));
var not2 = parseFloat(prompt("Digite a segunda nota"));
var not3 = parseFloat(prompt("Digite a terceira nota"));
var media = (not1+not2+not3) / 3;
if(media >= 7){
alert( "O aluno " +nome+ " foi APROVADO!! com a nota: " +media)
}
else
{
alert("O aluno " +nome+ " foi REPROVADO!! com a nota: " +media)
}