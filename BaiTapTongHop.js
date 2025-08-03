class Students{
    constructor(id,name,age,scores){
        this.id = id,
        this.name = name,
        this.age = age,
        this.scores = scores
    }
}

const student1 = new Students(1, "Nguyen Van A", 12, [7,8,9])
const student2 = new Students(2, "Nguyen Van B", 13, [4,8,7])
const student3 = new Students(3, "Nguyen Van C", 15, [5,4,10])
const student4 = new Students(4, "Nguyen Van D", 16, [8,9,4])
const student5 = new Students(5, "Nguyen Van F", 18, [9,10,3])
let studentList = [student1,student2,student3,student4,student5]

import {getStudentById, getCLassAverage, getTopStudents, getStudentsByScoreRange, sortStudentsByName} from 'help-function.js';

console.log(getCLassAverage(studentList))
console.log(getStudentById(studentList,2))
console.log(getTopStudents(studentList))
console.log(getStudentsByScoreRange(studentList,5,6))
console.log(sortStudentsByName(studentList))



