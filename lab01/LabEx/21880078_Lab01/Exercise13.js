/**
 *  T(x, n) = x^2 + x^4 + ... + x^2n
 */
function LuyThuaChan(x, n)
{
    let L = 1;
    for (let i = 1; i <= 2*n; i++)
    {
        L = L * x;
    }
    return L;
}

let S = 0, x = 2, n = 3;
if (n >= 1)
{
    for (let i = 1; i <= n; i++)
    {
        L = LuyThuaChan(x, i);
        S = S + L;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}