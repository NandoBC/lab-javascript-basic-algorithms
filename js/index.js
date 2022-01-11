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

/*Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.*/

let loremParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus consectetur feugiat feugiat. Donec mollis quis neque vel egestas.
Donec ipsum tellus, convallis ut pharetra eget, faucibus vitae nunc.
Vestibulum fermentum iaculis orci, nec tristique ipsum ultricies ut.
Quisque a mollis eros, a fringilla nunc. Duis ultrices risus sed velit vestibulum convallis.
Donec laoreet mi sed semper viverra. Quisque non leo lorem.
Donec molestie, lacus non pharetra viverra, magna leo gravida nisl, id commodo magna nunc non massa.
Phasellus id congue nunc. Suspendisse tincidunt cursus facilisis. Pellentesque id lacus ac dui feugiat dictum.
Aliquam pellentesque porta ligula. Aliquam id dolor a neque gravida mollis at in dui.

Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Etiam vulputate dolor tortor, vel dictum diam varius ut. Nunc tellus felis, viverra eget quam ac, sollicitudin facilisis lorem.
Duis pretium consequat ex non interdum. Maecenas ultrices, nisi vitae pulvinar eleifend, nibh diam accumsan mauris, nec molestie ex nunc a mi.
Suspendisse facilisis odio quis consequat vestibulum. Vivamus auctor ipsum faucibus ex vehicula, in tincidunt nunc placerat.
Aliquam blandit mollis nunc, sit amet accumsan magna ullamcorper eget. Fusce porttitor ipsum nec tortor tempor pharetra.
Nam commodo, lacus sed pellentesque commodo, nunc tellus commodo sapien, lobortis auctor orci turpis a nisi.
Praesent sapien neque, commodo eu tellus eget, pretium luctus augue. Maecenas rhoncus felis vel nunc varius imperdiet.
Quisque sed metus ac felis bibendum hendrerit. Maecenas quis egestas dolor. Integer a tempor sem, vitae sagittis lorem.

Curabitur nisl mauris, tristique vitae est et, porta suscipit lectus. Vestibulum ipsum metus, vulputate quis pharetra ut, placerat finibus nunc.
Cras eu arcu sit amet arcu pharetra maximus. Pellentesque et finibus elit, sit amet lacinia turpis. Nulla non cursus lacus, et faucibus ipsum.
Phasellus gravida neque turpis, eu luctus felis gravida at. Nulla luctus odio ac ex aliquam, eget iaculis lacus auctor.
Suspendisse faucibus, massa a lobortis hendrerit, elit leo ornare dolor, vel viverra dolor ligula vel mi. Integer dapibus sapien laoreet, laoreet ex id, iaculis enim.
Nam convallis dapibus magna, sit amet venenatis odio dictum in. Nunc dignissim nec nisi sit amet suscipit. Nam sollicitudin massa at risus rutrum aliquet.
Phasellus elementum congue malesuada.`

//Make your program count the number of words in the string.

function WordsInStr (str) {
    return str.split(" ").length;
}

console.log(`The number of words in the string is ${WordsInStr(loremParagraphs)}`);

//Make your program count the number of times the Latin word et appears.

let etCount = 0;

for (let i = 0; i < loremParagraphs.length; i++) {
    if (loremParagraphs[i] === " " && loremParagraphs[i+1] === "e" && loremParagraphs[i+2] === "t"){
        etCount++;
    }
}

    console.log(`There are ${etCount} "et"s in the string`);

/*Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods
(such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop,
if-else statements with some break and continue... Just sayin' smiley */

//Primeiro sanear a string, remover caracteres que não sejam letras e padronizá-las ambas em minúsculas OU maiúsculas
//Depois inverter a string a ser comparada e usar o método localeCompare()

let phraseToCheck = "A man, a plan, a canal, Panama!";

let sanitizedPhrase = phraseToCheck.trim().toUpperCase;

console.log(sanitizedPhrase);