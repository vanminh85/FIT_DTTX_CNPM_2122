/**
 * Tinh S(n) = 1^2 + 2^2 + 3^2 + ... + n^2
 */

let S = 0, n = 3;
if (n >= 5 && n <= 20)
{
    for (let i = 1; i <= n; i++)
    {
        S = S + i * i;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}