// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Fernando"

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Carolina"

//1.4 Print `"The navigator's name is YYYY"`.*/
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};


// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    let newString = "";
    for (let index = 0; index < hacker1.length; index++) {
        newString += hacker1[index] + " ";
    }
    console.log(newString.toUpperCase());
        
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(hacker2));

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

let comparisonResult = "hacker1".localeCompare("hacker2");

if (comparisonResult < 0) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) = 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);  
}

