const employee = [
    {
        name: "Piyush",
        department : "SDE2",
        salary : 53000,
        experience : 3.7
    },
    {
        name : "Sangita",
        department : "Assistant Professor",
        salary : 170000,
        experience : 7
    },
    {
        name : "A",
        department : "B",
        salary : 123,
        experience : 4
    }
]
function employeeDetail(employeeList){
    let bonus = 0;
    let totalExpence = 0;
    for (let i=0;i<employeeList.length;i++)
  {
    const employee = employeeList[i];
    if (employee.salary>=70000){
        bonus = employee.salary * 0.2;

    }else if (employee.salary>=50000){
        bonus = employee.salary * 0.1;
    }else {
        bonus = employee.salary * 0.05;
    }
    let finalSalary =  employee.salary+bonus;

    totalExpence = totalExpence + finalSalary;

    console.log
    (`
        Employee:${employee.name},
        Department:${employee.department},
        Salary:${employee.salary},
        Bonus:${bonus},
        Final Salary:${finalSalary}`
    )
    
 }
 console.log(`Total Expence:${totalExpence}`)
}

employeeDetail(employee);