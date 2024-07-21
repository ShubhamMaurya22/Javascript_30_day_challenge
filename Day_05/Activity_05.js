// Task 01
const higherOrderFunction = () => {
    console.log('Hello')
}

const callHigherOrderFun = (func, number) => {
    for (let i = 0; i < number; i++) {
        func()
    }
}

callHigherOrderFun(higherOrderFunction,4)

