/**
 * Tinh S(x, n) = 1 + x*2/(2!) + x*4/(4!) + ... + x*(2n)/((2n)!)
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

let S = 1, n = 5, x = 2;
for (let j = 1; j <= n; j++)
{
    S = S + (x*2*j)/GiaiThua(2*j);
}
console.log("S(x, n) = ", S);