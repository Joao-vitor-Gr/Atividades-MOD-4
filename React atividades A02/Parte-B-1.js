/* Parte B - Hora do Jogo!
Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors

company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
        shirts: {
        colors: ['red', 'green', 'blue'],
        },
        socks: {
        colors: ['cyan', 'magenta', 'yellow'],
        },
    },
}; 





//////////////////////////////Não consegui fazer ::::::////////////////////////
                                     F
*/





/* A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas 
os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks */


const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },

};


let {shirts, socks} = clothes;

let [...cor1] = shirts.colors;

let [...cor2] = socks.colors;

console.log(...cor1, ...cor2);



/* Utilizando os dois arrays abaixo, 
desestruture cada array com spread para clonar todos itens menos o primeiro */



const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

let [tira, ...numbers1] = arr;
let [tira2, ...numbers2] = arr2;

console.log(...numbers1, ...numbers2);



/* A partir do objeto abaixo, retorne um array onde cada item é o nome completo 
de cada pessoa no array. Utilize arrow function. */
var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
];

let nomeTodo = persons.map( nomes => `${nomes.firstname} ${nomes.lastname};`);

console.log(...nomeTodo);