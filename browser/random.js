// var SubStng=function (word,pattern){
//     let ans =0;
  

//     for (const str of pattern){
//         if (word.indexOf(str)!==-1){
//             ans ++
//         }
       
//     }
//      return ans;
// }
// console.log(SubStng("abc",["ab","abc","bc"]))





// setTimeout(func,3000)
 
// function func(){
//     document.getElementById("manu").innerHTML="hi hisham good evening"
// }

//



// setTimeout(func,1000)
// function func(){
//     let d =new Date();
//     document.getElementById("manu").innerHTML=
//     d.toLocaleTimeString("en-US",{
//     hour12: true
//     })
// }


// function display(demo){
//     document.getElementById("manu").innerHTML=demo
// }

// function operation(a,b){
// let sum = a +b
// return sum
// }
// let result=operation(10,20)

// display(result)



//callback example


function display(data){
    document.getElementById("manu").innerHTML=data
}
function oper(a,b,call) {
    let sum = a+b
    call(sum)
}
oper(10,20,display)
