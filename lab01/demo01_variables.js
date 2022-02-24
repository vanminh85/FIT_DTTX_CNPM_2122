console.log("Hello World !");

// Khai bao hang so
const a = 100;
console.log("const a = ", a);

// Khai bao bien cuc bo & toan cuc trong code block
let b = 10;
var c = 1;

console.log("let b = ", b);
console.log("let c = ", c);

// Kiem tra su khac nhau giua 3 keyword const, var, let
// a = 99; // Error vi khong the thay doi gia tri cua hang so a

b = 999;
c = 888;
console.log("let b = ", b);
console.log("let c = ", c);

flag = true;
if (flag == true)
{
    console.log("=> a = ", a);
    console.log("=> b = ", b);
    console.log("=> c = ", c);

    const d = 777; // Bien cuc bo trong 1 code block
    let e = 666; // Bien cuc bo trong 1 code block
    var f = 555; // Bien toan cuc trong 1 file

    console.log("=> d = ", d);
    console.log("=> e = ", e); 
    console.log("=> f = ", f);
}

// console.log("=> d = ", d);
// console.log("=> e = ", e);
console.log("=> f = ", f); // do f duoc khai bao kieu var, bien toan toan nen co the duoc truy xuat