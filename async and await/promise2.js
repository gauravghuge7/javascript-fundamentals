name = () => {
    return new Promise( function f(resolve, reject) {
        setTimeout( () => {
            console.log("timer done name ");
            resolve(200);
        },4000)
    })
}


name1 = () => {
    return new Promise( (solve, unsolve) => {
        setTimeout( () => {
            console.log("timer done name 1");
            unsolve(400);
        },3000)
    })
}

name12 = async () => {
    try {
        console.log("processing started ");
        const response = await name();
        console.log("response is + ", response)

        console.log("second processing started ");
        response1 = await name1();
        console.log(" second response is ",response1);
    } 
    catch (error) {
        console.log(" error is "+error);
    }
}

name12();