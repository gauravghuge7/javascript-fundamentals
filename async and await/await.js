function createPromise(){

    return( new Promise( function f(resolve, reject) {
        /// your code was goes here 

        setTimeout(function f() {
            console.log("timer done ");
            reject(
                10
            
            );
        }, 3000);
    }))
}





async function consume() {
    try {
    
        console.log("inside function ");
        const response = await createPromise();
        console.log(" response is ", response);

    } catch (error) {
        console.log("error is "+error);
    }
    
}



consume();

