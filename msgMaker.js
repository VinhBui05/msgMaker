/*
1. Project Objectives:
- Build a message generator program using JavaScript: 
    + Every time a user runs a program, they should get a new, randomized output
- Use Git version control
- Use command line
- Develop locally on your computer
*/

// what types of messages to output?
// 3 arr of dif type of word: S + V + adj: 
let arr1 = ['the Sun', 'the moon', 'the earth', 'anything', 'nothing'];
let arr2 = ['is', 'will be', 'was', 'be', 'shall be'];
let arr3 = ['beautiful', 'great', 'perfet', 'nice', 'yellow'];

// an func use random to reate msg from 3 arrs
function msgMaker (name) {
    let msg = ' ';
    let i1 = Math.floor(Math.random() * 5);
    let i2 = Math.floor(Math.random() * 5);
    let i3 = Math.floor(Math.random() * 5);

    //console.log(i);
    msg = arr1[i1] + ' ' + arr2[i2] + ' ' + arr3[i3] + '!'; // changed later
    console.log(name + '! ' + msg);
}; 

// receive user name
let user = 'ABC';
msgMaker(user);
console.log(i);



