// Task 01
let arr = []
let row = 3;
let col = 3;
let val = 0;

for(let i = 0; i < row; i++){
    arr[i] = []
    for (let j = 0; j < col; j++) {
        arr[i][j] = val++
        
    }
}
console.log(arr)

// Task 02
const arr2 = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
for(let i = 0; i < arr2.length; i++){
    for(let j = 0; j < arr2[i].length; j++){
        if(arr2[i][j] == 4){
            console.log(`found the value `, arr2[i][j], 'at index', j)
        }
    }
}
