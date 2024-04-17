function new1() {
    return (new Promise ( (resolve, reject) => {
        setTimeout( (n) => {
            console.log(" this is the new1 function ",n);
        }, 3000)
        resolve("resolve done")
    }))
}

console.log("start");
const n1 = new1();


n1.then(f = () => {
    console.log("promise done");
})
.catch(function g (value){
    console.log("handled ",value);
} )
.finally(b = () => {
    console.log(" this is finally ");
})
console.log("end");


for(let i=0; i<1548900; i++) {
    // come data
}














function new2() {
    return( new Promise( function newi1(resolve, reject) {
        setTimeout((n) => {
            console.log("the value of n is ",n);
        }, 3000);
    }))
}



function new3() {
    return(new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(" this is the new3 function ");
        })        
    }))
}



