/**
 *  T(x, n) = x + x^2 + x^3 + ... + x^n
 */
function LuyThua(x, n)
{
    let L = 1;
    for (let i = 1; i <= n; i++)
    {
        L = L * x;
    }
    return L;
}

let S = 0, x = 2, n = 2;
if (n >= 1)
{
    for (let i = 1; i <= n; i++)
    {
        L = LuyThua(x, i);
        S = S + L;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}