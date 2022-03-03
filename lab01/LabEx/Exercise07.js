/**
 * Tinh S(n) = 1/2 + 2/3 + 3/4 + ... + n/(n + 1))
 */

let S = 0, n = 3;
if (n >= 1)
{
    for (let i = 1; i <= n; i++)
    {
        S = S + i/(i + 1);
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}