// Promise: Là đối tượng giúp quản lý hành vi thực thi bất đồng bộ trong lập trình
const genRandomNumber1 = new Promise((resolve, reject) => {
    // Sau 2 giây sinh ra 1 số ngẫu nhiên bất kỳ
    setTimeout(()=>{
        const number = Math.random()
        if(number < 0.5)
            resolve(number.toFixed(2))
        else
            reject("TH1: Số ngẫu nhiên sinh ra lớn hơn hoặc bằng 0.5")
    }, 2000)
})

const genRandomNumber2 = new Promise((resolve, reject) => {
    // Sau 2 giây sinh ra 1 số ngẫu nhiên bất kỳ
    setTimeout(()=>{
        const number = Math.random()
        if(number < 0.5)
            resolve(number.toFixed(2))
        else
            reject("TH2: Số ngẫu nhiên sinh ra lớn hơn hoặc bằng 0.5")
    }, 2000)
})

// Gọi hàm trả về đối tượng kiểu promise
Promise.all([genRandomNumber1, genRandomNumber2])
    .then(result => console.log(`Số cần ghi tối nay: ${result}`))
    .catch(err => console.log(`Lỗi: ${err}`));