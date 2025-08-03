const getStudentById = (studentList, id) => {
    const find = studentList.find((student)=> student.id === id) || -1
    return find
}

const getTopStudents = (studentList)=>{
    let topStudent = {}
    let maxAverage = 0;
    studentList.forEach((student)=>{
        const avg = student.scores.reduce((sum, current)=>{
            return (sum + current)
        },0)/3
        if(avg > maxAverage){
            topStudent = student
            maxAverage = avg
        }
    })
    return topStudent
}

const getCLassAverage  = (list) =>{
    let totalScores = 0;
    let count = 0;
    list.forEach(({scores})=>{
        totalScores += scores.reduce((sum, current)=>{
            return (sum + current)
        },0)
        count += scores.length
    })
    return count === 0 ? 0 : totalScores/count
}

const getStudentsByScoreRange = (studentList, min, max) =>{
    const filteredStudents =  []
    studentList.forEach((student)=>{
        const avg = student.scores.reduce((sum, current)=>{
            return (sum + current)
        },0)/3
        if( avg >= min && avg <= max){
            filteredStudents.push(student)
        }
    })
    return filteredStudents.length === 0 ? "None" : filteredStudents
}

const sortStudentsByName = (studentList) =>{
    return studentList.sort((a,b) => a.name.localeCompare(b.name));

}

export {getStudentById,getTopStudents,sortStudentsByName, getStudentsByScoreRange, getCLassAverage};