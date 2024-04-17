class complexNumber {
    #real;
    #imag;

    constructor(r,i) {
        this.#real = r;
        this .#imag = i;

    }

    display() {
        console.log(this.#real," = i",this.#imag);
    }

    get real() {
        return this.#imag;
    }
    get imag() {
        return this.#imag;
    }

    addComplexNumber(c)  {
        this.#real += c.real;
        this.#imag += c.imag;
    }
}

const c1 = new complexNumber(2,3);
c1.display();

const c2 = new complexNumber(8,9);
c1.addComplexNumber(c1);
c1.display();