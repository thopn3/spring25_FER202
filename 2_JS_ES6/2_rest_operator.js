// Định nghĩa hàm với tham số rest
const sum = (...numbers) => {
    let total = 0;
    for(let i of numbers){
        total += i;
    }
    return total;
}

// Gọi hàm
console.log("Tổng các số = " + sum(1, 2, 3));
console.log("Tổng các số = " + sum(1, 2, 3, 4));
console.log("Tổng các số = " + sum(1, 2, 3, 4, 5, 6));