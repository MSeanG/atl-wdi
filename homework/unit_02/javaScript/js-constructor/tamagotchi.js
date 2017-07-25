console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name,creatureType,foodInTummy,restedness,health){
        this.name=name;
        this.creatureType=creatureType;
        this.foodInTummy=10;
        this.restedness=10;
        this.health=10;
        
    }
    cry(){
        return this.foodInTummy--;
        console.log('food in tummy:' +this.foodInTummy);
        console.log('WAHH!!!' +this.name);
    }
    puke(){
        return this.foodInTummy--;
        console.log('restedness of:' +this.foodInTummy);
        console.log('YAWN!!!' +this.name);
    }
    yawn(){
        return this.restedness--;
        console.log('food in tummy:' +this.restedness);
        console.log('WAHH!!!' +this.name);
    }
}
class Zero extends Tamagotchi{
    constructor(name,creatureType){
        super(name,creatureType);
    }
}
class One extends Tamagotchi{
    constructor(name,creatureType){
        super(name,creatureType);
    }
}
class Two extends Tamagotchi{
    constructor(name,creatureType){
        super(name,creatureType);
    }
}
class Three extends Tamagotchi{
    constructor(name,creatureType){
        super(name,creatureType);
    }
}
//create new Tamagotchis
const tim = new Zero('Tim','Tiny');
const sam = new One('Sam','Small');
const mat = new Two('Mat','Medium');
const bob = new Three('Bob','Big');

//test out your Tamagotchies below via console.logs

console.log(tim);
console.log(sam);
console.log(mat);
console.log(bob);
tim.cry();
sam.cry();
mat.puke();
bob.yawn();