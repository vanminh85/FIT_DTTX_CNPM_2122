const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
});

readline.question('Type a number: ', function(input) { // Console.WriteLine("Nhap gia tri n : ");
readline.close();
const number = parseInt(input); // int n = Int32.Parse(Console.ReadLine());
console.log('Number ^ 2: ${number ** 2}');
});