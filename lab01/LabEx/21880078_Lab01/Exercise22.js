/**
 * Viết chương trình tìm mảng con liên tục có tổng giá trị lớn nhất trong mảng số nguyên.
 */

// Khai bao mang 1 chieu (array)
let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
 
// Tim tong lon nhat
function sum_max(A) {
    let Smax = Math.max(...A), S = 0;
    for (var i = 0; i < A.length; i++) {
        S = Math.max(A[i], S + A[i]);
        Smax = Math.max(S, Smax);
    }
    return Smax;
}
// Tim mang co tong lon nhat
let Smax = Math.max(...A), S = 0, start = 0, end = 0, c = 0;
for (var i = 0; i < A.length; i++) {
    if (S + A[i] < A[i]) {
        c = i;
        S = A[i];
    } 
    else {
        S = S + A[i];
    }

    if (Smax < S) {
        Smax = S;
        start = c;
        end = i;
    }
}
console.log('Mang con cho Smax = ', sum_max(A), ' co chi so tu ', start, ' den ', end);