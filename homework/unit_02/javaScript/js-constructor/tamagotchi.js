console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(foodInTummy,restedness,health){
        this.foodInTummy=10;
        this.restedness=10;
        this.health=10;
    }
    cry(){
        return this.foodInTummy--;
        console.log('food in tummy:' +this.foodInTummy);
        console.log('WAHH!!!');
    };
}

//create new Tamagotchis
var Tamagotchi1 = new Tamagotchi();
var Tamagotchi2 = new Tamagotchi();

//test out your Tamagotchies below via console.logs
console.log(Tamagotchi1);
console.log(Tamagotchi2);

Tamagotchi1.cry();
Tamagotchi2.cry();