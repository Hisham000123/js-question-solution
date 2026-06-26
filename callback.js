// const demo=(result)=>{
//     console.log("THE RESULT IS",result)
// }
// const promo=(a,b,callback)=>{
//     const sum= a+b
//     callback(sum)
    
// }
// promo(10,20,demo)



//for of

// const runloop=(array=[],callback)=>{
// for(const element of  array){
//     const idx=array.indexOf(element)
//     callback(idx,array,index)
// }

// }




//for each

// arr=[1,2,3,4,5,6,7,8]

// arr.forEach(element=>{
//     console.log(element)
// })



//filter

//  const demo=arr.filter(Element=>{
//     return Element % 2==0
    
// })
// console.log(demo)


// //mapped 


// const mapped=arr.map(Element=>{
//     return Element % 2== 0 ? Element *10 : Element 
// })
// console.log(mapped)




// ar=["manu","minnu","finu"]
// const demo= ar.map(name=>{
//    return name.toUpperCase()
// })
// console.log(demo)


// arr=[1,2,3,4,5,6,7,8]
// const demo= arr.some(num=>{
//     return num % 2==0
// })
// console.log(demo)

// const demo= arr.every(num=>{
//     return num % 2==0
// })
// console.log(demo)


// const reduced= arr.reduce((prev, num)=>{
//     return prev + num
// },0)
// console.log(reduced)


//1  arr = [2, 4, 6, 8, 10];
//  const numbers= arr.map(num=>{
//     return num * num
//  })
//  console.log(numbers)



//    2 num= [5, 12, 7, 18, 3, 20];
//   const greater= num.filter(n=>{
//     return n > 10;
//   })
//   console.log(greater)

//  3  arr=[10, 20, 30, 40, 50];
//   const sum= arr.reduce ((prev,num)=>{
//     return prev+num
//   },0)
//   console.log(sum)


//  4 arr=["apple", "banana", "mango", "orange"];
// const upper=arr.map(text=>{
//     return text.toUpperCase()
// })
// console.log(upper)



// arr= ["Sam", "Alexander", "John", "Christopher", "Tom"];
// const more= arr.filter(text=>{
//     return text.length >5 
// })
// console.log(more)



array=['finu','hida','hisham','minnu']
const demo=array.map(el=>{
    return el.toUpperCase()

})
console.log(demo)


