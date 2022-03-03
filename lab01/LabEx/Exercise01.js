/**
 * Tinh S(n) = 1 + 2 + 3 + 4 + ... + n
 */

let S = 0, n = 1;
if (n > 3 && n < 50)
{
    for (let i = 1; i <= n; i++)
    {
        S = S + i;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}