// Task 01
const marks = {
    english: 67,
    marathi: 45,
    hindi: 45
}

for(let sub in marks){
    console.log(sub)
}

console.log(Object.keys(marks))
console.log(Object.values(marks))