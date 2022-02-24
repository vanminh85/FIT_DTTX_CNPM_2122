/**
 * Array trong ES8
 */

'use trict'

console.clear()

// Khai bao mang 1 chieu (array)
let a = [1, 2, 3, 4, 5];

console.log("Print array.");
for (let i = 0; i < a.length; i++)
{
    console.log(a[i]);
}
console.log(a);

console.log("Print array with arrayObject method");
a.forEach(item => {
    console.log(item);
});

console.log("Revert array");
a.reverse();
console.log(a);
a.reverse();
console.log(a);

console.log("Insert new item to array.");
a.push(99);
console.log(a);

console.log("Remove item in array.");
a.splice(2, 3);
console.log(a);

console.log("Sort operator.");
a.sort();
console.log(a);

console.log("Insert or Remove Objects.");
a.push(88, 66, [1, 2, 4]);
console.log('a =', a);