//  https://www.youtube.com/watch?v=DfBCcyauAys

// QUESTION 1
// create a for loop that prints out the numbers from 5-10 (inclusive)

let i = 5;
while (i <= 10) {
    console.log(i);
    i++;
}

// QUESTION 2
// Create a for loop that will print out all the even numbers between 10 and 40.
//  Do the same for all odd number as well.

let a = 10;
while (a <= 40) {
    a++;
    if (a % 2 === 0) {
    console.log(a);
    } else {
    (a % 2 != 0);
    console.log(a);
    } 
} 

//  QUESTION 3 
/*  
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a for loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    4. After 3 loop iterations, change "loogedIn" to be true. 
    5. After the loops is done print out: "Successfully logged in!"

    HINT1: This is more challenging with a for loop
    HINT2: This is not an ideal candidate for a for loop
    HINT3: You don't have to provide all parts of the for loop construct
*/

let loggedIn = false;
let b = 0;

while (!loggedIn) {
    b++;
    console.log("Incorrect login credentials");

    if (b === 2) {
        loggedIn = true;
        console.log("Successfully logged in");
    }
}


/* 
    1. Create a for loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!
    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/