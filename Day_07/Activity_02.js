// Task 01
const obj = {
    title: 'Chai',
    author: 'Shubham',
    year: 2024,
    myFun: function(){
        console.log(`Book name ${this.title}, author is ${this.author}`)
    },
    updateYear: function(year){
        this.year = year
    }
}

obj.myFun()
obj.updateYear(2025)
console.log(obj.year)