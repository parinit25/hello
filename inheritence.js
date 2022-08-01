class Employee {
    constructor(name , salary)
    {
        this.name = name;
        this.salary = salary;

    }
}
let employees = [];

var emp1 = new Employee ("aman",10000);

var emp2 = new Employee ("abhishek",25000);

var emp3 = new Employee("rahul",30000);

var emp4 = new Employee("rajesh",15000);

var emp5 = new Employee("Raj", 45000)


employees = [emp1,emp2,emp3,emp4,emp5];

for(let i=0;i<employees.length ; i++ )
        {
            var temp ;
            for (let  j =i +1 ; j<employees.length ; j++)
            {

                if(employees[j].salary > employees[i].salary)
                {
                temp = employees[i];
                employees[i]= employees [j];
                employees[j] = temp;
                }
            }

        }
        console.log(employees);



