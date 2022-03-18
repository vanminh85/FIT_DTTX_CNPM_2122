/**
 * Tinh S(n) = 1/2 + 1/4 + 1/6 ... + 1/2n
 */

let S = 0, n = 12;
if (n >= 9)
{
    for (let i = 1; i <= n; i++)
    {
        S = S + 1/(2*i);
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}