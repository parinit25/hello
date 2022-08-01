class Employee
{
  constructor( salary, work_per_day)
  {
    this.salary= salary;
    this.work_per_day= work_per_day;
  }
  getinfo()
  {
    console.log("salary of employee =>" + this.salary );
    console.log("number of hours of work per day =>"+ this.work_per_day);
  }
  addSal()
  {
  if(this.salary<500)
  {
    this.salary=this.salary+10;
    console.log("salary of employee =>" + this.salary);
  }
  }
  addWork()
  {
  
  if(this.work_per_day >6)
  {
    this.salary= this.salary+5;
    console.log("total Salary of employee =>" + this.salary);
  }
  
}
}
var employee1= new Employee(499,8);
employee1.getinfo();
employee1.addSal();
employee1.addWork();