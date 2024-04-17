let obj = {

    x : 10,
    demo() {
        y = {
            gun: () => {
                console.log(this.x)
            }
        }
        y.gun();
    }
}

obj.demo();