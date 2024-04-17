fetch("https://www.youtube.com/watch?v=EpSekM4n87Q&list=RDCwieBeWTVxI&index=6")
.then(function f(response) {
    return response.json();
})

.then(function f(value) {
    console.log(value);
})