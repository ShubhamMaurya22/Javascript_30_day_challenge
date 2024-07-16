// Task
let row = 5
for(let i = 1; i <= row; i++){
    let result = ''
    for(let j = 1; j <= i; j++){
        result += '* '
    }
    console.log(result)
}

/*
i - 1 , j - 1    => *
i - 2 , j-1,2    => **
i - 3 , j-1,2,3  => ***
*/