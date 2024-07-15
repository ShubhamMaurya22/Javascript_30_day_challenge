// Task
let year = 2016
if( year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
    console.log('It is an Leap year')
}else{
    console.log('It is not a Leap year')
}