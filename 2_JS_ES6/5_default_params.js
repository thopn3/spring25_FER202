// Hàm với tham số mặc định
const sum = (a = 10, b = 20) => a + b

console.log(`${sum()}`)
console.log(`${sum(5, 7)}`)
console.log(`${sum(5)}`)
console.log(`${sum(7, 7, 6)}`)

function printInfo(student = {id:1, name: "Tom", age: 20}, score = [8, 9.5, 7] ){
    let avgScore;
    let sumScore=0;
    score?.forEach(s => sumScore += s);
    avgScore = (sumScore/score.length).toFixed(2);
    console.log(`Student: ${student.id}-${student.name}-${student.age}; AvgScore: ${avgScore}`);
}

printInfo();
printInfo({id:2, name:"Hoàng", age:19}, [10, 9.5]);
