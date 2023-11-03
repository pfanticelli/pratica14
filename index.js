const prompt = require('prompt-sync')();

alturas = [];

const alunos = ["Digite a 1° altura: ", "Digite a 2° altura: ", "Digite a 3° altura: ", "Digite a 4° altura: ", "Digite a 5° altura: ", "Digite a 6° altura: ", "Digite a 7° altura: ", "Digite a 8° altura: ", "Digite a 9° altura: ", "Digite a 10° altura: "]

// Implementar a entrada de dados
for (var i = 0; i < alunos.length; i++) {
  alturas.push(prompt(alunos[i]));
}

// Implementar o processamento de dados
const diferenca = ["Aluno 1 é maior que: ", "Aluno 2 é maior que: ", "Aluno 3 é maior que: ", "Aluno 4 é maior que: ", "Aluno 5 é maior que: ", "Aluno 6 é maior que: ", "Aluno 7 é maior que: ", "Aluno 8 é maior que: ", "Aluno 9 é maior que: ", "Aluno 10 é maior que: "]

// Fazer for dentro de for
for (var i = 0; i < alturas.length; i++) {
  let contador = 0;

  // Laço interno para comparar as alturas
  for (var j = 0; j < alturas.length; j++) {
    if (alturas[j] < alturas[i]) {
      contador++;
    }
  }

  // Armazenar o número de alturas menores
  diferenca[i] += contador;
}

// Implementar a saída de dados
for (var i = 0; i < alturas.length; i++) {
  console.log(diferenca[i], "alunos(s)");
}
