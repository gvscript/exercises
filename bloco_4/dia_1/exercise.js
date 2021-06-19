/*
1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

const a = 10;
const b = 3;

const soma = a + b;
const sub = a - b;
const mult = a * b;
const div = a / b;
const mod = a % b;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);

/*
2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
*/

const num1 = 10;
const num2 = 23;
let ret = null;

if (num1 > num2) {
  ret = num1;
} else {
  ret = num2;
};
console.log(ret);

/*
3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/
const n1 = 99;
const n2 = 93;
const n3 = 81;
let ret = null;

if(n1 > n2 && n1 > n3) {
  ret = n1;
} else if (n2 > n1 && n2 > n3) {
  ret = n2;
} else {
  ret = n3;
};
console.log(ret);

/*
4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/
const number = 0
let ret = null
if(number < 0) {
  ret = 'Negative';
} else if(number > 0) {
  ret = 'Positive';
} else {
  ret = 'Zero';
};
console.log(ret);

/*
5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/
const a1 = - 60;
const a2 = 60;
const a3 = 60;
let ret = null;

if(a1 < 0 || a2 < 0 || a3 < 0) {
  ret = 'Inválido'
} else if(a1 + a2 + a3 === 180) {
  ret = true;
} else {
  ret = false;
};
console.log(ret);


/*
6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

/*
7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/
const percent = 49;
let nota = null;

if(percent >= 90) {
  nota = 'A';
} else if(percent >= 80) {
  nota = 'B';
} else if(percent >= 70) {
  nota = 'C';
} else if(percent >= 60) {
  nota = 'D';
} else if(percent >= 50) {
  nota = 'E';
} else {
  nota = 'F';
};
console.log(nota);

/*
8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/
const n1 = 873;
const n2 = 47;
const n3 = 74;
let ret = false;

if(n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
  ret = true
};
console.log(ret);

/*
9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/
const n1 = 72;
const n2 = 48;
const n3 = 84;
let ret = false;

if(n1 % 2 !== 0 || n2 % 2 !== 0 || n3 !== 0) {
  ret = true;
};
console.log(ret)

/*
10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

const valCusto = 30
const valVenda = 55
const nVendas = 1000
let valCustoTotal = null;
let lucro = null;

if( valCusto < 0 || valVenda < 0) {
  lucro = 'erro'
} else {
  valCustoTotal = valCusto * 20 / 100 + valCusto
  lucro = (valVenda - valCustoTotal) * nVendas
}
console.log(lucro);

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.


let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));