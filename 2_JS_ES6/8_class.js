class Student{
    constructor(id, name, age){
        this.id = id
        this.name = name
        this.age = age
    }

    showInfo(){
        console.log(`${this.id}-${this.name}-${this.age}`)
    }
}

// Khai báo đối tượng kiểu Student
const newStudent = new Student(1, "Tuấn Minh", 20);
newStudent.showInfo();