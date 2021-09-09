// This is 3rd brach
/*
1. Project Objectives:
- Build a message generator program using JavaScript: 
    + Every time a user runs a program, they should get a new, randomized output
- Use Git version control
- Use command line
- Develop locally on your computer
*/

// what types of messages to output?
// create a obj
const obj = {  
arr1: ['the Sun is shining', 'the moon is shining', 'the earth is turn around', 'anything is nothing', 'nothing is anything'],
arr2: ['Why is Sunday?', 'why Monday?', 'today is anyday', 'Friday is nothing', 'someday is nothing'],
arr3: ['beautiful is argly', 'great is nothing', 'perfet is imperfect', 'nice is bad', 'yellow is blue']
};

// func create an random number
function ranNo (num) {
    return Math.floor(Math.random() * num);
} 

// arr to store msg
let msgArr = [];

// push msg to arr
for (let key in obj) {
    let idx = obj[key].length;
    switch(key) {
        case 'arr1':
            msgArr.push(obj[key][ranNo(idx)]);
            break;
        case 'arr2':
            msgArr.push(obj[key][ranNo(idx)]);
            break;
        case 'arr3':
            msgArr.push(obj[key][ranNo(idx)]);
            break;
        default:
            msgArr.push('Not enough inf');
    }
}

// func cread msg
const msgMaker = () => {
    let msg = msgArr.join('\n');
    console.log(msg);
};
msgMaker();



/*
// an func use random to reate msg from 3 arrs
function msgMaker (name) {
    let msg = ' ';
    let i1 = Math.floor(Math.random() * 5);
    let i2 = Math.floor(Math.random() * 5);
    let i3 = Math.floor(Math.random() * 5);

    //console.log(i);
    console.log(i1, i2, i3);
    msg = arr1[i1] + ' ' + arr2[i2] + ' ' + arr3[i3] + '!'; // changed later
    console.log(name + '! ' + msg);
}; 
*/

/* receive user name
let user = 'ABC';
msgMaker(user);
*/


