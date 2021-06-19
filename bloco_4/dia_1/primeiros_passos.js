/* PARTTE II - VARIÁVEIS
1 Crie uma constante chamada name e atribua a ela o seu nome (Exemplo: Carolina);
2 Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
3 Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu;
4 Utilize o console.log() para imprimir as constantes e variáveis que você criou;
5 Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
6 Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?
*/

const name = 'Gabriel';
const birthCity = 'São Paulo';
let birthYear = 1987;

console.log(name);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);
birthCity = 'Recife';
//constante não reatribui valor

/* PARTE III - TIPOS PRIMITIVOS
1 - Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
2 - Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
3 - Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;
*/

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
//number
console.log(typeof isEnrolled);
//boolean
console.log(typeof patientInfo);
//object
console.log(typeof patientEmail);
//string
console.log(typeof patientAge)
//undefined, variável não foi declarada

//OP ARITIMÉTICOS
let base = 5;
let altura = 8;
let area = base * altura;
console.log(area);
//40

let perimetro = (base * 2) + (altura * 2);
console.log(perimetro);
//26

/* PARTE IV - IF/ELSE
1 - Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
2 - Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
3 - Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
4 - Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"
5 - Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
6 - Altere o valor da nota para verificar se as condições que você implementou funcionam;
*/

const nota = 80;

if (nota >= 80) {
    console.log('Parabéns, você foi aprovado');
} else if (nota >= 60) {
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovado');
};

/* PARTE V - SWITCH/CASE
1 - Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
2 - Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
*/

const status = 'oi';

switch (status) {
    case 'aprovada':
        console.log('Você foi aprovado');
        break;
    case 'lista' :
        console.log('Vocẽ ficou na lista de espera');
        break;
    case 'reprovado' :
        console.log('Vocẽ foi reprovado');
        break;
    default :
        console.log('Não se apliica');
};