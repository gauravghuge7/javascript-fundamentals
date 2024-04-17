
func1 = () => {

    return new Promise( inner = (resolve, reject) => {

        setTimeout( f = () => {
            console.log(" timer has completed ");
            reject(10);

        },1000)

    })
}


func2 = async () => {
    try {
        console.log(" starting process");
        const response = await func1();
        console.log(" response is "+ response);

    }
    catch(err) {
        console.log("this is catch block ", err);
    }
}


func2();

for(let i=0; i<9009999000; i++ ) 
{
    /// some code 
}
