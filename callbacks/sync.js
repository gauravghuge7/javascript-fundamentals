function h(x, gn) {

    /// h --> is a higher order function 
    /// fn --> is a callback 


    console.log(x*x);
    gn();

}

// h(10, function (){
//     console.log(" done with call back ");
// }) 




function exec(n) {
    console.log(" squared value is ",n)
}



// h(10, () => {
//     console.log(" three functions in call back");
// }, exec(7));



// console.log("start");
setTimeout(function f() {
    console.log(" timer done 0");
}, 3000)


// console.log("end")



console.log("start 1");

setTimeout( function g() {
    console.log( " timer done 1");
}, 4000)

console.log(" ending one");


// for (let i=0; i<10000009990; i++ ) {
//     // some block of code
// }



