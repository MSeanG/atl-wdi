words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach(function(n,index,words){
    words[index] = n.toUpperCase();
});
console.log(words);



var squareMe = [0, 1, 10, 24, 595];
var squares = squareMe.map(function(v){
    return v*v;
})
//squareMe.forEach(function(n,index,squareMe){
//    squareMe[index] = Math.pow(n,2);
//});
console.log(squareMe);



var numbers = [5,7,9,12,20];
function getSun(total, num){
    return total + num;
};

numbers.forEach(function(n,index,numbers){
    numbers[index] = ;
});

var names = ['Jeff','Zoe','Nat','Bob'];
var alphNames = names.sort();
console.log(alphNames);

var values = [1, -5, -2, 3, 12, -14, 0, 23, -1, 8];

let sum = values.reduce(function(accumulator, v) {
    console.log(accumulator);
  return accumulator + v;
}, 0);              // zero is the initial value of the accumulator

console.log('The sum is', sum);

var characters = [
  { name: 'Mario',  hatColor: 'red', health: 30},
  { name: 'Luigi',  hatColor: 'green', health: 25},
  { name: 'Toad',   hatColor: 'mushroom', health: 25},
  { name: 'Wario', hatColor: 'yellow', health: 30 },
  { name: 'Yoshi',  hatColor: null, health: 35}
];

var characters = [
  { name: 'Mario',  hatColor: 'red', health: 30},
  { name: 'Luigi',  hatColor: 'green', health: 25},
  { name: 'Toad',   hatColor: 'mushroom', health: 25},
  { name: 'Wario', hatColor: 'yellow', health: 30 },
  { name: 'Yoshi',  hatColor: null, health: 35}
];

//Add an attribute called attack to each character.  Make it half as much as the characters health.(.map())
let charactersWithAttack = characters.map(function(char){
  let newChar = Object.assign({},char)
  char.attack = char.health/2;
  return newChar;
});
console.log(characters)
console.log(charactersWithAttack)
//Find all characters without a hatColor (.filter())
let noHat = characters.filter(function(char){
  return char.hatColor === null;
});
console.log(noHat);
//Find the total health of all characters (.reduce())
let totalHealth = characters.reduce(function(accumulator,char){
  return accumulator + char.health;
},0);
console.log(totalHealth);
//Sort characters alphabetically (.sort())
let aplha = characters.sort(function(a,b){
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
});
console.log(alpha)


function makeCar(model,color){
  return {
    model: model,
    color: color,
      fuel: 100,
    drive: function() {
      this.fuel--;
      return 'Vroom!';
    },
    honk: function(){
      return 'HONK!';
    }
    refuel: function() {
      this.fuel = 100;
    }
  }
}

var celica = makeCar('Toy-Yoda Celica','limegreen');
var civic = makeCar('Honda Civic','lemonchiffon');

class Car {
  constructor(model,color){
    this.model = model;
    this.color = color;
    this.fuel = fuel;
  }
  drive(){
    this.fuel--;
    return 'Vroom!';
  }
  refuel(){
    this.fuel = 100;
  }
}

var celica = new Car('Toy-Yoda Celica','limegreen');
var civic = new Car('Honda Civic','lemonchiffon');
console.log(celica);
//function makeCar(model,color){
//  return {
//    model: model,
//    color: color,
//      fuel: 100,
//    drive: function() {
//      this.fuel--;
//      return 'Vroom!';
//    },
//    honk: function(){
//      return 'HONK!';
//    }
//    refuel: function() {
//      this.fuel = 100;
//    }
//  }
//}
//
//var celica = makeCar('Toy-Yoda Celica','limegreen');
//var civic = makeCar('Honda Civic','lemonchiffon');

class Car {
  constructor(model,color){
    this.model = model;
    this.color = color;
    this.fuel = 100;
  }
  drive(){
    this.fuel--;
    return 'Vroom!';
  }
  refuel(){
    this.fuel = 100;
  }
}

var celica = new Car('Toy-Yoda Celica','limegreen');
var civic = new Car('Honda Civic','lemonchiffon');
console.log(celica);
celica.drive();
celica.drive();
celica.drive();
celica.drive();
console.log(celica);
//function makeCar(model,color){
//  return {
//    model: model,
//    color: color,
//      fuel: 100,
//    drive: function() {
//      this.fuel--;
//      return 'Vroom!';
//    },
//    honk: function(){
//      return 'HONK!';
//    }
//    refuel: function() {
//      this.fuel = 100;
//    }
//  }
//}
//
//var celica = makeCar('Toy-Yoda Celica','limegreen');
//var civic = makeCar('Honda Civic','lemonchiffon');

class Person{
  constructor(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.hairColor=hairColor;
    this.legs=2;
    this.eyes=2;
  }
  dyeHair(newHairColor){
    this.haircolor=newHairColor;
  }
  sayHell(){
    return 'Hello, my name is' + this.name;
  }
}
let bob = new Person('Bob',47,'Male','Brown');
let andrea = new Person('Andrea',26,'Female','Blonde');

class Atm{
  constructor(type,money,transactionHistory){
    this.type=type;
    this.money=0;
    this.transactionHistory=[];
  }
  withdraw(amount){
    this.money-=amount;
    this.transactionHistory.push(amount*-1)
  }
  deposite(amount){
    this.money+=amount
    this.transactionHistory.push(amount)
  }
  showBalance(){
    return this.money
  }
}
const checking = new Atm('checking')
console.log(checking);
checking.deposite(100);
checking.deposite(50);
checking.withdraw(90);
console.log(checking.showBalance())
/*////////////////////////////////////////////////////////////////////////*/
class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.diet = [];
  }
  eat(food) {
    this.diet.push(food);
    console.log(this.diet);
  }
}

class Dog extends Animal {
  constructor(name, breed, tail) {
    super(name,breed);
    this.waggingTail = tail;
  }
  bark() {
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}

class Cat extends Animal {
  constructor(name, breed, numLives) {
    super(name,breed);
    this.numLives = numLives;
  }
  meow() {
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}
const fido = new Dog('Fido','Beagle',true);
console.log(fido);
fido.bark();