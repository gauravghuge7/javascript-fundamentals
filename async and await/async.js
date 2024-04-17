async function demo1() {
    return 10;
}

console.log(demo1());


function createPromise() {
    return(new Promise((resolve, reject) => {
        console.log(" create promise function ");
    }))
}









try {
    
    async function demo2() {
        console.log(" inside function ");
        const response = await createPromise();
        console.log(" response is ",response);
    
    }
    const a = demo2();
} 

catch (error) {
    console.log("error");
}


