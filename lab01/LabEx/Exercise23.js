/**
 * Viết chương trình tìm mảng con liên tục có tổng giá trị nhỏ nhất trong mảng số nguyên.
 */

// Khai bao mang 1 chieu (array)
let A = [-2, 1, -3, 4, -1, 5, 7];
 
// Tim tong lon nhat
function sum_min(A) {
    let Smin = Math.min(...A), S = 0;
    for (var i = 0; i < A.length; i++) {
        S = Math.min(A[i], S + A[i]);
        Smin = Math.min(S, Smin);
    }
    return Smin;
}
// Tim mang co tong nho nhat
let Smin = Math.min(...A), S = 0, start = 0, end = 0, c = 0;
for (var i = 0; i < A.length; i++) {
    if (S + A[i] > A[i]) {
        c = i;
        S = A[i];
    } 
    else {
        S = S + A[i];
    }

    if (Smin > S) {
        Smin = S;
        start = c;
        end = i;
    }
}
console.log('Mang con cho Smin = ', sum_min(A), ' co chi so tu ', start, ' den ', end);