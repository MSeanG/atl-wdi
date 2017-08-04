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