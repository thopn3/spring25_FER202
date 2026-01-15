// Sử dụng từ khóa: async/await để định nghĩa hàm xử lý theo hình thức bất đồng độ
// Cải tiến của Promise
async function genRandomNumber1(){
    const number = Math.random();
    if(number<0.5)
        return number;
    else
        throw new Error("Số ngẫu nhiên sinh ra lớn hơn hoặc bằng 0.5");
}

// Viết hàm để thực thi hàm trên
async function main(){
    try {
        const result = await genRandomNumber1();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
main();
