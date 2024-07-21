// Task 01
const Sum = (num1, num2) => {
    console.log(num1+num2)
}
Sum(19,29)

// Task 02
const findChar = (str, letter) => {
    for(let i = 0; i < str.length; i++){
        if(str[i] == letter){
            return true
        }
    }
    return false
}

const res = findChar('shubham', 'm')
console.log(res, 'letter is present in ')