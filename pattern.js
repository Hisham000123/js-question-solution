
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


// hallow square


// function hallow() {
//     let n = 4
//     for ( let i = 1; i <= n; i++) {
//         let row = " "
//         for ( let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j === 1 || j === n) {
//                 row += "*"
//             }

//             else {
//                 row += " "

//             }

//         }
//         console.log(row);

//     }
// }
// hallow()




function square(n){
    
    for(let i=1;i<=n;i++){
      let   row=""
    for(let j=1;j<=n;j++){
        row= row +"*"
    }
  console.log(row)
    }
}
square(4)