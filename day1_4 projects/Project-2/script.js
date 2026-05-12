const employee = [
    {name: "Piyush",
     salary: 5000   
    },
    {
     name:"Sangita",
     salary:6000   
    },
    {
     name:"A",
     salary:7000   
    }
]
function employeeDetail(employee){
    let bonus = 0;
    for(let i=0;i<employee.length;i++){
    if(employee[i].salary>=7000){
        bonus = 600;
    }else{
        bonus = 500;
    }

    console.log( `Name: ${employee[i].name}
    Salary: ${employee[i].salary}
    Bonus:${bonus}`
    )}
}
(employeeDetail(employee));