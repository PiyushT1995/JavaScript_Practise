const student = {
    name : "Piyush",
    age : 32,
    course : "JavaScript",
    marks : [60,70,80,90]
}
function getStudentDetail(student){
    let totalMarks = 0;
    for(let i=0;i<student.marks.length;i++){
        totalMarks = totalMarks+student.marks[i];
    }
    let average = totalMarks/student.marks.length;
    let grade = "";

    if(average>=90){
        grade = "A";
    }else if(average>=70){
        grade = "B";
    }else if(average>=50){
        grade = "C";
    }else{
        grade = "D";
    }
    let result = "";
    if(average>=50){
        result = "PASS";
    }else{
        result = "FAIL";
    }
    
    return`Student Name:${student.name},
    Age:${student.age},
    Course:${student.course},
    Total Marks:${totalMarks},
    Average:${average},
    Grade:${grade},
    Result:${result}`

}
console.log(getStudentDetail(student));