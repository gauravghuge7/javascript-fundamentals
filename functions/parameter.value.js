function sum([num1, num2]) {
    return num1 + num2;
}


let number = [10, 34];

let result = sum(number);

console.log(result);


function sumOfallParameters() {
    let sum = 0;

    for (var i=0; i<arguments.length; i++) {
        sum += arguments[i];
        return sum;
    }
}
let result2 = sumOfallParameters(3,56,7,67);

console.log(result2);