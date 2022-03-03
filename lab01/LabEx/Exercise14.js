/**
 *  T(x, n) = x^1 + x^3 + x^5 ... + x^(2n + 1)
 */
function LuyThuaLe(x, n)
{
    let L = 1;
    for (let i = 1; i <= 2*n + 1; i++)
    {
        L = L * x;
    }
    return L;
}

// console.log(LuyThuaLe(2,2));

let S = 0, x = 2, n = 3;
if (n >= 1)
{
    for (let i = 1; i <= n; i++)
    {
        L = LuyThuaLe(x, i);
        S = S + L;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}