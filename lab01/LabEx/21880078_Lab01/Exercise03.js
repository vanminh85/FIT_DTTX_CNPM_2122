/**
 * Tinh S(n) = 1 + 1/2 + 1/3 + 1/4 ... + 1/n
 */

let S = 0, n = 12;
if (n >= 7)
{
    for (let i = 1; i <= n; i++)
    {
        S = S + 1/i;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}