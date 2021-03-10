/* A partir da variável abaixo e utilizando um método de array,
 retorne a raiz quadrada de todos os valores do array original em um novo array */
var num = [4, 9, 16, 25];
let raizQ = num.map(cada => Math.sqrt(cada));
console.log(raizQ);




/*A partir da variável abaixo e utilizando um método de array,
 multiplique todos os valores do array por 10. Utilize arrow function. */
var numm = [65, 44, 12, 4];
let multiplicaPor10 = numm.map(cada => cada*10);
console.log(multiplicaPor10);




/* A partir da variável abaixo retorne um array com valores de ​age​
 (idade) maiores ou iguais a 18 com arrow function e filter */
var idades = [32, 33, 16, 40];
let maiores = idades.filter(cada => cada >= 18);
console.log(maiores);