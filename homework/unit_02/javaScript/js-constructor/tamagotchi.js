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
    };
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
//create new Tamagotchis
var Tamagotchi1 = new Tamagotchi();
var Tamagotchi2 = new Tamagotchi();
const tim = new Zero('Tim','Tiny');
const sam = new One('Sam','Small');

//test out your Tamagotchies below via console.logs
console.log(Tamagotchi1);
console.log(Tamagotchi2);
console.log(tim);
console.log(sam);

Tamagotchi1.cry();
Tamagotchi2.cry();
tim.cry();
sam.cry();