	const lyrics = ['never', 'gonna', 'give', 'you', 'up'];

	const uppercaseLyrics = lyrics.map(function(nggyu) {
    return nggyu.toUpperCase();
  });
  console.log(uppercaseLyrics);

  
  
const people = [
  {
    name: 'George Michael',
    age: 14,
    title: 'Mr. Manager'
  },
  {
    name: 'T-Bone',
    age: 34,
    title: 'Arsonist'
  },
  {
    name: 'George Oscar',
    age: 32,
    title: 'Illusionist'
  }
];

const names = people.map(function(x){
  return x.name;
});
console.log(names);



const products = [
  {
    name: 'iPad',
    price: 549.99
  },
  {
    name: 'iPhone',
    price: 799.99
  },
  {
    name: 'iPod',
    price: 2.99
  }
];

const tax = products.map(function(x){
  return x.price * .07;
});
console.log(tax);