const student =  {
    name : "Piyush",
    marks : [10,20,70,80,90]
}

function reportCard(student) {
    let totalMarks = 0;
    
    for (let i = 0;i<student.marks.length;i++){
        totalMarks = totalMarks + student.marks[i];
    }

    const average = totalMarks/student.marks.length;

    let grade;
    if(average>=90){
        grade = "A";
    }else if (average>=70){
        grade = "B";
    }else if (average>=50){
        grade = "C";
    }else{
        grade = "Fail";
    }

  return ` Student: ${student.name}
          Total Marks:${totalMarks}
          Average:${average}
          Grade:${grade} 
          `;
}
console.log(reportCard(student));