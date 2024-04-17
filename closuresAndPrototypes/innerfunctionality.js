let score = 17;

function one() {
    let score = 1
    console.log(score);
}

two = () => {
    let score = 2
    console.log(score);
}

three = () => {
    let score = 3
    console.log(score);
}

// one()
// two() 
// three()

// console.log(score);


/// diffrent methods for basic concepts of 


function outerfunc() {
    let outervar = ' this is scope level 1'

    function innerfunc() {
        let innerVar = ' this is scope level 2'

        console.log(innerVar);
        console.log(outervar);
    }
    innerfunc()

}

// outerfunc()




/// other example to userstand this method scope resolution 

    //// scope resolution 

    

