// Task 01
const calProduct = (num1, num2 = 10) => {
    console.log(num1 * num2)
}
calProduct(20, 5)

// Task 02
const grettingMsg = (name, age = 18) => {
    const msg = `Hello! ${name}, and your age is ${age}`
    console.log(msg)
}
grettingMsg('Shubham', 22)