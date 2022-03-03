/**
 * Tinh S(n) = 1 + 1/(1 + 2) + 1/(1 + 2 + 3) + ... + 1/(1 + 2 + ... + n)
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

let S = 0, n = 6;
for (let j = 1; j <= n; j++)
{
    S = S + 1/Tong(j);
}
console.log("S(n) = ", S);