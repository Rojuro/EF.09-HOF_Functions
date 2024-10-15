// Exercício 1 - Dobrar valores do array
function dobrarValores() {
    const input = document.getElementById('arrayInput1').value;
    const array = input.split(',').map(Number);
    const resultado = array.map(num => num * 2);
    document.getElementById('result1').textContent = `Array dobrado: [${resultado}]`;
}

// Exercício 2 - Converter para caixa alta
function capsLock() {
    const input = document.getElementById('arrayInput2').value;
    const array = input.split(',');
    const resultado = array.map(str => str.toUpperCase());
    document.getElementById('result2').textContent = `Array em caixa alta: [${resultado}]`;
}

// Exercício 3 - Filtrar alunos aprovados
const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
];

function aprovados() {
    const aprovados = alunos.filter(aluno => aluno.media >= 6.0);
    document.getElementById('result3').textContent = `Alunos aprovados: ${JSON.stringify(aprovados)}`;
}

// Exercício 4 - Calcular média da turma
function calcularMedia() {
    const total = alunos.reduce((acumulador, aluno) => acumulador + aluno.media, 0);
    const media = total / alunos.length;
    document.getElementById('result4').textContent = `Média da turma: ${media.toFixed(2)}`;
}
