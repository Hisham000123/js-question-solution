//call stack,event loop.callback queue,mictotask queue




// const asyncpromise=()=> new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject ("hi")
        
//     },3000 )
// })
 
// asyncpromise().then((Response)=>{
//     console.log(Response)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally((last)=>{
//     console.log("completed",last)
// })


const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("first")   
    },3000)
})
const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("second")   
    },4000)
})
const p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("third")   
    },500)
})
// p1.then((res)=>{
//     console.log(res)
// })
// p2.then((res)=>{
//     console.log(res)
// })
// p3.then((res)=>{
//     console.log(res)
// })

   
//all

Promise.all([p1,p2,p3]).then((res)=>{
     console.log(res)
}).catch((error)=>{
    console.log("error is here",error)
})




//any

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
})


//race


Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})