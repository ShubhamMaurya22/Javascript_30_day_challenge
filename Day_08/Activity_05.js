// Task 01
let animal = 'Dog'
let age = 10
let color = 'black'

function bark (){
    console.log('woof')
}

let pitbull = {animal, age, color, bark}
console.log(pitbull)
pitbull.bark()

// Task 02
let name = 'firstName'
let obj = {
    [name] : 'Shubham',
    lastName : 'Maurya'
}
console.log(`${obj.firstName} ${obj.lastName}`)