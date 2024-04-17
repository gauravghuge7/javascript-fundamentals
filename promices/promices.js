function createPromice() {
    return new Promise(function exec 
        (resolve, reject) {
            // your code goes here

            setTimeout(function () {
                console.log("this is settimeout function ");
            }, 2000)
        }    
    )
}


// const z = createPromice();

// console.log("promise done");

// console.log(" end")



function func1() {
    return new Promise(function inner1(resolve, reject) {

        setTimeout( () => {
            console.log(" this is the inner promice function ");
        })
        
    })

}

const b = func1();


function func2() {
    new Promise(inner1 = (resolve, reject) => {
        console.log(" this is inner one function");
    })

    // return inner1();
}


const a = func2();



