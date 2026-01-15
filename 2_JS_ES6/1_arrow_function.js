// Sử dụng cú pháp lamda expression để định nghĩa hàm mũi tên
// Trước khi trả về giá trị cho hàm thì thực hiện các tác vụ khác
const add1 = (a,b) => {
    a += 10;
    b += 10;
    return a + b;
}

// Hàm trả về giá trị
const add2 = (a,b) => a + b;

// Hàm tính bình phương của 1 số 
const pow = n => n*n;

// Hàm bên trong đối tượng
const person = {
    name: "David",
    age: 20,
    show_info: function(){
        console.log("Hello, my name is " + this.name + ", I'm " + this.age + " years old");
    }
}

// Gọi hàm và thực thi
console.log("Kết quả của add1 = " + add1(5, 5));
console.log("Kết quả của add2 = " + add1(10, 10));
console.log("Kết quả của pow = " + pow(10));
person.show_info();
