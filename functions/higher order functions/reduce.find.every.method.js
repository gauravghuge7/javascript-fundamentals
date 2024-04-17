
// reduce method in javascript


const cartBill = [20, 30, 50];

const sumOfBill = cartBill.reduce((prev, end) => prev + end)

// console.log(sumOfBill);




/// every method for 


const gameScore = [200, 300, 310, 250, 150];

// console.log(typeof gameScore[1]);

const gameScoreCheck = gameScore.every((v) => {
    typeof v === 'number'
})

// console.log(" checking score type ", gameScoreCheck);



const above200 = gameScore.find((score) => 
      score > 200
)

console.log(above200);
