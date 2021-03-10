
/*Obs: essa é a melhor série do PLANETA #BLINDSPOT */
const objet = { first: 'Jane', last: 'Doe' };

const {first} = objet;

console.log(first);


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

const {name} = company;
const [...cores1] = company.products.socks.colors;
const [...cores2] = company.products.shirts.colors;

console.log(name, ...cores1, ...cores2);