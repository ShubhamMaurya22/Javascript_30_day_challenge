// Task 01
let number = 3
switch(number){
    case 1:
        console.log('Monday')
        break;
    case 2: 
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Enter a valid Number')
}   

// Task 02
let mark = 98;

switch (true) {
    case (mark >= 90 && mark <= 100):
        console.log('You get A grade');
        break;
    case (mark >= 80 && mark < 90):
        console.log('You get B grade');
        break;
    case (mark >= 70 && mark < 80):
        console.log('You get C grade');
        break;
    case (mark >= 60 && mark < 70):
        console.log('You get D grade');
        break;
    case (mark >= 50 && mark < 60):
        console.log('You get E grade');
        break;
    case (mark >= 35 && mark < 50):
        console.log('You get EE grade');
        break;
    default:
        console.log('You are failed');
}

