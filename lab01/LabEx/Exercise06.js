/**
 * Tinh S(n) = 1/(1 * 2) + 1/(2 * 3) + 1/(3 * 4) + ... + 1/(n * (n + 1))
 */

let S = 0, n = 3;
if (n > 6)
{
    for (let i = 1; i <= n; i++)
    {
        S = S + 1/(i * (i + 1));
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}