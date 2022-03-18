/**
 * Viết chương trình để tìm ra số đường có thể leo lên đỉnh của một ngọn đồi (với n bước để lên tới đỉnh đồi).
 * Với mỗi lần di chuyển, chúng ta chỉ có thể thực hiện 1 hoặc 2 bước.
 */
/**
 * Để bước lên bậc thứ n thì người ta cần leo từ bậc thứ (n - 1) hoặc từ bậc thứ (n - 2).
 * Như vậy, số cách leo lên bậc thứ n sẽ bằng số cách leo lên bậc thứ (n - 1) cộng với số cách leo lên bậc thứ (n - 2).
 * Hay nói một cách khác, số cách leo lên bậc thứ n là số Fibonaci.
 */

function fibonaci(n) {
    if (n <= 1)
        return n;
    return fibonaci(n - 1) + fibonaci(n - 2);
}

function count(s) {
    return fibonaci(s + 1);
}
 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function nhap_so(input) { 
    readline.close();
    const num = parseInt(input);
    
    console.log('So duong co the di = ', count(num));
}
readline.question('Nhap so buoc n : ', nhap_so);