/**
 * Arrow function
 */
// Ham truyen thong
function SayHello()
{
    console.log("Hello World !");
}

SayHello();

// Cai tien ham truyen thong --> Gan ham cho mot doi tuong (Con tro ham)
const SayHi = function()
{
    console.log("Hi everybody !");
}

SayHi();

// Dinh nghia ham mui ten (Arrow Function)
const SayWelcome = () => {
    console.log("Welcome to Introduce Software Engineering !");
}

SayWelcome();

console.log("-------------------------------------------");

const Sum = (a, b) => a + b;
console.log(Sum(10, 145));

const Double = a => a * 2;
console.log(Double(12));