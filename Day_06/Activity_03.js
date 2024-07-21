// Task 01
let arr = [1,2,3,4,5]
let res = arr.map((num) => num * 2)
console.log(res)

let arr2 = [2,3,4,5,6,7,8,9,10]
let res2 = arr2.filter((num) => num % 2 == 0)
console.log(res2)

let arr3 = [2,3,4,5,6,7,8,9]
let res3 = arr3.reduce((total, currentValue) => {
     return total + currentValue
},0)
console.log(res3)