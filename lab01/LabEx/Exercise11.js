/**
 * Tinh S(n) = 1 + 1.2 + 1.2.3 + ... + 1.2.3...n
 */
function GiaiThua(n)
{
let G = 1;
for (let i = 1; i <= n; i++)
{
    G = G * i;
}
return G;
}

let S = 0, n = 4;
if (n >= 1)
{
    for (let i = 1; i <= n; i++)
    {
        G = GiaiThua(i);
        S = S + G;
    }
    console.log("S(n) = ", S);
}
else
{
    console.log("Nhap lai gia tri n !");
}