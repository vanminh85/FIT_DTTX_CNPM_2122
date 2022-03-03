/**
 * Tinh S(n) = 1/2 + 3/4 + ... + (2n + 1)/(2n + 2))
 */

let S = 0, n = 10;
if (n > 5)
{
    for (let i = 0; i <= n; i++)
    {
        S = S + (2*i + 1)/(2*i + 2);
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}