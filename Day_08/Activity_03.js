// Task 01
let arr = [1,2,3,4]
let newArr = [...arr, 5,6]
console.log(newArr)

// Task 02 
function sum (...nums){
  
    let total = 0;
    nums.map((num) => total += num)
    return total;
}

console.log(sum(1,23,4))