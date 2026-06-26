const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name:"Charlie", age: 35, salary:65000, department:"Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];
// ----------------------------->
// const Upper=employees.map(emp=>{
//     return emp.name.toUpperCase()
// })
// console.log(Upper)

// ----------------------------------->
// const sal=employees.filter(emp=>{
//     return emp.salary >=60000;
// })
// console.log(sal)

// ----------------------------------------->

// const TotalSum=employees.reduce((total,emp)=>{
//     return emp.salary + total
// },0)

// console.log(TotalSum)

// ----------------------------------------------------->
// const Mfilter= employees.filter(emp=>{
//     return emp.department=="Marketing"
// })
// const salaryy=Mfilter.reduce((total,emp)=>{
//     return total + emp.salary
// },0)

// const tlength=Mfilter.length

// const avg_sal= salaryy/tlength;
// console.log(avg_sal)



// ------------------------------------------------>

// const names=employees.map(emp=>{
//     return emp.name
// })
// console.log(names)

// ---------------------------------------------..>

// const ages=employees.map(emp=>{
//     return emp.age += 5
// })
// console.log(ages)

//

// ------------------------------------------>
// const DepSal=employees.map(emp=>{
//      const{name,salary,department}=emp;
//      return {name,salary,department}
// })
// console.log(DepSal)



// ------------------------------------------->
// const old=employees.filter(emp=>{
//     return emp.age > 35
// })
// console.log(old)

// ------------------------------------------->
// const eng=employees.filter(emp=>{
//     return emp.department=="Engineering"
// })
// console.log(eng)

// --------------------------------------------->
// const salary=employees.map(emp=>{
//     return emp.salary
// })
// const max=Math.max(...salary)
// console.log(max)
// ------------------------------------------------->
// const length=employees.length
// console.log(length)   //  using length propertyyy
// -------------------------------------------------->

// const lengths=employees.reduce((count)=>{
//     return count + 1
// },0)
// console.log(lengths)    //without length property

// -------------------------------------------------------->
// const earn=employees.filter(emp=>{
//     return emp.salary >=70000
// })
// const list =earn.map(emp=>{
//     return emp.name
// }
// )
// console.log(list)
// --------------------------------------->

// const young=employees.filter(emp=>{
//     return emp.age< 30;
// })
// const filtered=young.map(emp=>{
//     const {name,department}= emp
//     return{name,department}
// })
// console.log(filtered)
// -------------------------------------->

// const Finance=employees.filter(emp=>{
//     return emp.department=="Finance"
// })
// const tsalary=Finance.reduce((total,emp)=>{
//     return emp.salary + total
// },0)
// console.log(tsalary)

// ------------------------------->

// const eng= employees.filter(emp=>{
//     return emp.department=="Engineering"
// })
// len_age=eng.length;
// const avg=eng.reduce((total,emp)=>{
//  return emp.age+ total
// },0)
// const average =avg/len_age;
// console.log(average)

// -------------------------------------->

// const MarHR=employees.filter(emp=>{
//     return emp.department == "Marketing" || emp.department=="HR"
// })
// console.log(MarHR)

// const names=MarHR.map(emp=>{
//     return emp.name
// })
// console.log(names)

// -------------------------------------------->

// const filtered=employees.filter(emp=>{
//     return emp.department!="Management"
// })
// const list =filtered.map(emp=>{
//     return emp.salary
// })
// console.log(list )

// ------------------------------------------------->

// const age= employees.reduce((total,emp)=>{
//   return emp.age + total
// },0)
// console.log(age)

// -------------------------------------------------->
// const sal=employees.filter(emp=>{
//   return emp.salary >=60000 && emp.salary <=80000;
// })
// const names=sal.map(emp=>{
//   return emp.name
// })
// console.log(names)

// ----------------------------------------------------------->

//avg salary = total salary of all employees /no of employees


  // const TotSal= employees.reduce((total,emp)=>{
  //  return emp.salary + total
  // },0)
  // const EmpNum=employees.length;
  // const avg=TotSal/EmpNum;

  // const sal=employees.filter(emp=>{
  //   return emp.salary > avg
  // })
  // console.log(sal)



