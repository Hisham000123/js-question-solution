// let stud= "hiba"
// console.log(stud)





// if(true){
//     var stud= "hiba"
    
// }
// console.log(stud)


// hoisting

// console.log(stud)
// var stud= "hiba"    

// reassigning


// let name ="manu"
// name="fida"
// console.log(name)`

// console.log("hisham" + "manu")
// console.log("1"+ + 2)


//operators in js 

// arithmetic operators
// assignment operators
// comparison operators
// logical operators
// bitwise operators
  


// pre increment and post increment


// let  a =10
// const b =20
 
// const c = a++ 
// console.log(c,a) //10



// var t  =9
// const b =10
// const c = ++t
// console.log(c,t) 



// const demo= parseInt("110",16)
// console.log(demo)





// function demo(desicion){
   
//     console.log("my desicion is "+ desicion)   
// }
// demo("out")


// function area(l,b){
//       const tr=console.log("area of triangle is "+ (0.5*l*b))
//      const rc= console.log("area of rectangle is "+ (l*b))
//     const sq=console.log("area of square is "+ (l*l))
//    return tr,rc,sq
// }
//  area(5,10)



// function calc(a,b,){
//     const add= console.log(a+b)
//     const sub=console.log(a-b)
//     const div=console.log(a/b)
//     const mul= console.log(a*b)

// return add,sub,div,mul
// }
// calc(5,6)


// logical operators
// console.log(1<10 && 2>7)
// console.log(2<9 || 3<2)  
// console.log(!"manuuuuuu")   
// console.log(!0)           
                



// const a=15000
// const b=1001
// const c=2100


// if(a>b && a>c){
// console.log("a is greater number")
// }
// else if(b>c){
//     console.log("b is greater number")
// }
// else{
//     console.log("c is greater")
// }


// function getday(n) {
//     if(n==1){
//         return "monday"
//     }
//     else if(n==2){
//         return "tuesday"
//     }
//     else if(n==4){
//         return "wednesday"
//     }
//     else if(n==5){
//         return "thursaday"
//     }
//     else if(n==6){
//         return "friday"
//     }
//     else if(n==7){
//         return "saturday"
//     }
//     else {
//         return "invalid"
//     }
// }
// const demo= getday(9)
// console.log( demo)




//loop

// for(i=1;i<=7;i++){
//     console.log(i)
// }

// const demo=[10,"manu"]
// console.log(demo[1][3])



// function SumOfNumber(n){
//     let sum =0
//     for(i=1;i<=n;i++) {
//      sum+=i
//     }
// return sum
// }
// const demo=SumOfNumber(4)
// console.log(demo)


// check prime


// function Prime(n){

//     for(i=2;i<n;i++){
//         if(n%i==0){
//             return "is not prime"
//     }

// }
// return "it is prime"
// }
// console.log(Prime(8))





// function patterns (n){
//     for(let i=1;i<=n;i++){
//         let row = " "
//         for(let j=1;j<=n;j++){
//             row = row + "*"
//         }
//         console.log(row);
        
//     }
// }
// patterns(4)




// let i =0
// while(i<10){
//     console.log(i);
//     i++
    
// }


// let i=0
// do{
//     console.log(i)
//     i++
// }while(i<15)



// function palindrome(number){
// let temp=number
// let rev=0

// while(temp>0) { 
// const rem =temp%10
// rev=rev*10+rem
// temp=parseInt(temp/10)
// }
// return rev==number

// }
//   console.log(palindrome(123))   




//arrow function

// const sum =(a,b)=>  {
// return a + b
// }
// const mul =(a,b)=>  {
// return a * b
// }
// const sub=(a,b)=>  {
// return a - b
// }


// console.log(sum(10,30))
// console.log(mul(10,30))
// console.log(sub(10,30))


//arrow function for single statement

// const sum =(a,b)=> a + b
// console.log(sum(10,30))



// ternery operations

// let age=18
// let result=age >=18 ? "adult" :"Minor"
// console.log(result);



// let day =4

// switch(day) {
// case 1:
//   console.log('monday')
//   break

// case 2:
//   console.log('tuesday')
//   break

// case 3:
//   console.log('wednesday')
//   break
// case 4:
//   console.log('thursday')
//   break
// case 5:
//   console.log('friday')
//   break
// case 6:
//   console.log('saturday')
//   break
// }
 


//odd or even using switch 



  // let num =7

  // switch(num %2){
  //   case 0:
  //     console.log("number is even")
  //     break
  //     case 1:
  //       console.log("number is odd")
  //       break
  // }




  const str="Thankyou techolas"

  const demo="       hi     manu "

  console.log(str[0]);
  console.log(str.at(0))
  console.log(str.indexOf("manu"))
   console.log(str .toUpperCase())  
   console.log(str.startsWith("Thank"))
   console.log(str.endsWith("Thank"))
   console.log(str.slice(0,5))
  console.log(str.includes("than"))

   console.log(demo[0])
   console.log(demo[0].trim())
