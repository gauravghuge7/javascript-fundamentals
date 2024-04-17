

let arr = [2,3,4];

arr.forEach( (element, index, arr) => {
    // console.log(element, index, arr)
})

arr.forEach((element, index, arr) => {
        // console.log(" arrow function ",element, index, arr)
})


const heroes = ["naagraj", "amol", "doga", "dhurava", "moniraj"]


heroes.forEach((element) => {
    // console.log(element.toUpperCase());
})





arr.map((element) => {
    // console.log(element);

})



heroes.map((heroes) =>  {

    // console.log(heroes.toUpperCase());
})

// console.log(heroes)

const heroesWithRaj = heroes.filter((heroes) => {
        return heroes.endsWith("raj")
})

const heroesfilter = heroes.filter((hero) => {
    return hero.codePointAt(hero);
})

// console.log(heroesfilter);
// console.log(heroesWithRaj);





