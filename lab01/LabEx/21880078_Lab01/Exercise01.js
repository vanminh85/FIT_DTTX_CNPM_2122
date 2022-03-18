/**
 * Tinh S(n) = 1 + 2 + 3 + 4 + ... + n
 */

const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
});

readline.question('Nhap gia tri n :', function(input) {
readline.close();
let n = parseInt(input); 
console.log(n);

let S = 0;
if (n > 3 && n < 50)
{
    for (let i = 1; i <= n; i++)
    {
        S = S + i;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}
});

