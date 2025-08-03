const students = [
    {id: 1, name:"Nguyen A"},
    {id: 2, name:"Tran B"}
]

let student = students.forEach(student => {
    console.log(`Xin chao ${student.name}, Ma so ${student.id}`);
})