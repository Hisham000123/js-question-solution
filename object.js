const obj={
    id: 21,
    name:"hisham",  
    nickname:"manu",
    address: {
        city:"calicut",
        town:"anakuzhikkara",
     },
    hobbies:["soccer player","swimmer"]

 }
// console.log(obj.name)
// console.log(obj.address.city)

// console.log(obj.hobbies[1])


console.log(Object.hasOwn(obj,"hobbies"))
// console.log(Object.hasOwn(obj.address,"city"))

// console.log(Object.values(obj))
// console.log(Object.keys(obj))
// console.log(Object.entries(obj))





// Object.seal(obj)   ith use cheythaal field add cheyyaan pattiilla but modify
// Object.freeze(obj)   ith use cheythaal field add cheyyaan & modify cheeyyan pattiilla  





// const data=[{name:"manu",city:"calicut"}]
// console.log(data[0].name)


// math and date 

// const date =new Date() 
// console.log(date.toDateString())

 

// console.log(date.toLocaleString("en-US",{
//     month: "2-digit"
// }))






// console.log(Math.abs(-18))
// console.log(Math.max(10,20))
// console.log(Math.floor(7.2))
// console.log(Math.ceil(7.2))