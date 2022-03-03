/**
 * Tinh S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n + 1)
 */

let S = 0, n = 2;
if (n >= 2)
{
    for (let i = 0; i <= n; i++)
    {
        S = S + 1/(2*i + 1);
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}