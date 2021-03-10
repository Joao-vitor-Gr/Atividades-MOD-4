
//Rest & Spread
//Utilizando um operador clone o objeto c​lothes

const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const {...cor} = clothes;
const [...cor0] = clothes.pants.colors;
const [...cor1] = clothes.shirts.colors;
const [...cor2] = clothes.socks.colors;

console.log(cor)
console.log("cor 0:", ...cor0,"/ core 1:", ...cor1,"/ cor 2:", ...cor2);



/****************************************************************************/


/* Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a 
este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple']
 ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks */
 

const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const clone = {...clothes, shoes: {colors: ['yellow', 'purple']}};

console.log(clone);