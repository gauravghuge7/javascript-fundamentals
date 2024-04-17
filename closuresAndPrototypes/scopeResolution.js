const myglobalValue = 10

function func() {
    const val1 = 1;
    console.log(myglobalValue);

    inner = () => {
        const val2 = 2
        console.log(myglobalValue, val1, val2);

        function innerofInner() {
            const val3 = 3
            console.log(myglobalValue, val1, val2, val3);
        }
        innerofInner()
    }
    inner()
}

// func()



/// other example for scope resolution 


function superfunc () {
    let outervale = ' i am outer value'

    minor = () => {
        console.log(outervale);
    }
    minor()

}

superfunc()


