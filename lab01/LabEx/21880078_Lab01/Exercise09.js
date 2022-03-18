/**
 * Tinh S(n) = 1 * 2 * 3 * ... * n
 */

let S = 1, n = 6;
if (n > 6)
{
    for (let i = 1; i <= n; i++)
    {
        S = S * i;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}