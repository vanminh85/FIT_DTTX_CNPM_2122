/**
 * Tinh S(x, n) = x + x*2/(2!) + x*3/(3!) + ... + x*n/(n!)
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

let S = 0, n = 5, x = 2;
for (let j = 1; j <= n; j++)
{
    S = S + (x*j)/GiaiThua(j);
}
console.log("S(x, n) = ", S);