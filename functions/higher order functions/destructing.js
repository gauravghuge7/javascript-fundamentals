let newArray = [1,2,3,4,5,6];

// console.log(typeof newArray);

// in javascript all inputs are objects this is the rule 

const oneArray = new Array(1,2,3,4,5,7,8)

const twoArray = new Array(5,6,7,8,9)

// console.log(twoArray);

const threeArray = oneArray.concat(twoArray);
// console.log(threeArray);




const threeArray1 = [oneArray, twoArray]

// console.log(threeArray1);

const threeArray2 = [...oneArray, ...twoArray]

// console.log(threeArray2);


function testOne() {
    // console.log(arguments)
}


// testOne(2,3,4,5,6)


function testtwo() {
    // console.log(typeof arguments)
}


// testtwo(1,2,3,4,5,6)


let newArray1 = Array(1,2,3,4);

function manyarguments() {

    let args = Array.from(arguments) 
    let finalA = args.map(e => e);
    // console.log(finalA);
}

// manyarguments(1,2,3,4);



// rest spread and map methods 


function manyarguments(...args) {
    console.log(typeof args);
    let finalArr = args.map(e => e);
    console.log(finalArr);
}

// manyarguments();

const names = ["superman", "flash"]

const newNames = ["batman", ...names, "thor"];

const sitename = "pwskills";
// console.log([...sitename]);

// console.log([...newNames]);



// console.log([...names]);



function pwskills(...value) {
    return value
}

console.log(pwskills("batman", "flask"));





