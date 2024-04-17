
function a(b, func1) {
    console.log(" this is a funtion ", b * b);
    func1();
}

// a(15, function () {
//     console.log(" this is callback  with no name ");
// })

function d(c, func2) {
    console.log(" the cube number is ", c*c*c);
    func2();
}

// d(16, () => {
//     console.log(" this is our arrow function");
//})






d(16, func2 = () => {
    console.log(" this is arrow function ");
}
);

