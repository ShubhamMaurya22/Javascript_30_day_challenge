// Task 01
const obj = {
    title: 'Chai',
    author: 'Shubham',
    year: 2024,
    myfun : function (){
        return this.title
    }

}
const res = obj.myfun()
console.log(res)