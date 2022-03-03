/**
 * Tinh T(x, n) = x^n
 */

let T = 1, x = 5, n = 3;
for (let i = 1; i <= n; i++)
{
    T = T * x;
}
console.log("T(x, n) = ", T);