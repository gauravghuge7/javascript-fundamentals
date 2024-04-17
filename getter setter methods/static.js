class demo {

    static custom() {
        console.log(" calling a static method ");
        
    }

    #rating;

    get Rating1() {

        console.log(this.#rating);

    }

    set Rating1(r) {
        if(r<0)
        return;
        this.#rating = r;
    }
    
}

const d = new demo();

demo.custom();

d.Rating1 = 10;
d.Rating1



