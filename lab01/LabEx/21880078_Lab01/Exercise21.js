/**
 * Viết chương trình nhập vào ma trận A có n dòng và m cột. Thực hiện các yêu cầu sau:
- Tìm giá trị max.
- Tìm giá trị min. 
- Nhập một giá trị k, xuất ra vị trí i và j của giá trị này trong ma trận, nếu không có thì return ra (-1, -1).
 */

// function matrix(rows, cols, Value) {
//     var arr = [];
//     // Creates all lines:
//     for(var i = 0; i < rows; i++) {
//     // Creates an empty line
//         arr.push([]);
//         // Adds cols to the empty line:
//         arr[i].push( new Array(cols));
//         for(var j = 0; j < cols; j++) {
//           // Initializes:
//           arr[i][j] = Value;
//         }
//     }  
// return arr;
// }

var numbers = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21]
];
 
// Tìm max
let max = numbers[0][0];
for (var i = 0; i < numbers.length; i++){
    // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng i
    for (var j = 0; j < numbers[i].length; j++){
        if (numbers[i][j] > max)
        {
            max = numbers[i][j];
        }
    }
}
console.log('max = ', max);

// Tìm min
let min = numbers[0][0];
for (var i = 0; i < numbers.length; i++){
    // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng i
    for (var j = 0; j < numbers[i].length; j++){
        if (numbers[i][j] < min)
        {
            min = numbers[i][j];
        }
    }
}
console.log('min = ', min);

// Tìm gia tri k
let k = 12;
for (var i = 0; i < numbers.length; i++){
    // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng i
    for (var j = 0; j < numbers[i].length; j++){
        if (numbers[i][j] == k)
        {
            console.log('hang = ', i, 'cot = ', j);
        }
        else
        {
            let n = -1, m = -1;
        }
    }
}
console.log(m, n);