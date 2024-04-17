let myHeroes = ["thor", 'spiderman'];

let dcHeroes = ["batman", "flash", "superman"];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpidermanPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
    
}


Object.prototype.hitesh = function() {
    console.log(' hitesh is present in all objects ');
}


console.log(myHeroes.hitesh());

console.log(heroPower.hitesh());



Array.prototype.heyhitesh = function()  {
    console.log('hitesh say hi ');
}

console.log(myHeroes.heyhitesh());
// console.log(heroPower.heyhitesh());



