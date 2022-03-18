/**
 * Tinh S(n) = n!
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

let n = 5;
if (n >= 1)
{
    console.log(GiaiThua(n));
}
else
{
    console.log('Nhap lai gia tri n !');
}