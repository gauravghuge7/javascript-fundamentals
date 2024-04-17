const powertwo = (n) => {
    return n ** 2
}

const powercube = (powertwo, n) => {
    return powertwo(n) * n;
}

// console.log(powercube(powertwo, 3));



function sayhello() {

    return () => {
        console.log(" hello hitesh ");
    }
}

let guessvalue = sayhello()

// guessvalue();






 /// nested function for use of frameworks 


 const higherorder = n => {
    const onefun = m => {
        const twofun = p => {
            return n + m + p;
        }
        return twofun
    }
    return onefun
 }


// console.log(higherorder(2)(3)(4))

// higherorder(34)(678)(67)

// console.log(higherorder(45));  // this line is not printed

// console.log(higherorder(5)(4)(6))





const myNums = [4,5,6,7,4]

const sumArray = Arr => {
    let total = 0;
   Arr.forEach( (element) => {
        total += element
   })

   // alter method for this function 

   /* 

   Arr.forEach(function () {
    total += element 
   } )
   
   */


    return total;

}


// console.log(sumArray(myNums))





