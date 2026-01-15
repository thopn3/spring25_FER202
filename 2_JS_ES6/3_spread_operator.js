// Sử dụng toán tử spread (rải)
const number1 = [1, 2, 3];
const number2 = [4, 5, 6];
// Gộp 2 mảng lại
const number3 = [...number1, ...number2]; // Kỹ thuật rải các phần tử
const number4 = ["hello", "world", ...number3]; // Collection

// Log các phần tử của number3, number4
console.log(number3);
console.log(number4);

// Kết hợp giữa tham số rest và spread
const sum = (...numbers) => {
    let total = 0;
    for(let i of numbers){
        total += i;
    }
    return total;
}

console.log("Tổng các phần tử của number3 là: " + sum(...number3));



