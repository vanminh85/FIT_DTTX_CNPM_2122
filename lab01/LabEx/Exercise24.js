/**
 * Viết chương trình tìm vị trí của một giá trị trong một mảng đã được sắp xếp. 
 * Nếu không tìm thấy, thì insert giá trị này vào vị trí được sắp xếp trong mảng.
 */

// Khai bao mang 1 chieu (array)
let A = [1, 2, 5, 7, 9, 9, 18];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function nhap_so(input) { 
    readline.close();
    const num = parseInt(input);

    for (var i = 0; i < A.length; i++) {
        if (num == A[i])
        {
            console.log('Phan tu ', num ,' o vi tri:', i);   
        }
        else if (num > A[i] && num < A[i + 1])
        {
            A.splice(i + 1, 0, num);
            console.log(A);
            break;
        }
        else if (num > A[A.length - 1])
        {
            A.splice(A.length, 0, num);
            console.log(A);
            break;
        }
    }
}
  
readline.question('Nhap gia tri : ', nhap_so);