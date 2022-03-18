/**
 * Tinh S(x, n) = x + x*2/(1 + 2) + x*3/(1 + 2 + 3) + ... + x*n/(1 + 2 + ... + n)
 */
function Tong(m)
{
    let T = 0;
    for (let i = 1; i <= m; i++)
    {
        T = T + i;
    }
    return T;
}

let S = 0, n = 5, x = 2;
for (let j = 1; j <= n; j++)
{
    S = S + (x*j)/Tong(j);
}
console.log("S(x, n) = ", S);