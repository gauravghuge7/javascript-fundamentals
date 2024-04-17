newp = () => {
    return new Promise( function f(resolve, reject) {
        setTimeout( () => {
            console.log(" timer done ");
            reject(400);
        }, 3000)
    })
}


new1 = async () => {
    try {
        console.log(" processing started ");
        const response = await newp();
        console.log(" response is "+response);
    } catch (error) {
        console.log(" error is "+error);
    }
} 

new1();