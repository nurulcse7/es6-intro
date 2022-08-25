/* Practice Problem 1
01.	Write an arrow function that will take 3 parameters, will multiply the parameters, and will return the result.
02.	Write the following sentence in three lines and print the result: I am a developer. I love code. I love to eat biryani.
03.	write an arrow function that will take 2 parameters: One parameter will come from you
and the other parameter will be a default parameter. Add these two parameters and return the result.
*/
// Answer 01
const multiply = (x, y, z) => x * y * z;
const result1 = multiply(3, 5, 2);
console.log(result1) // 30

// Answer 02.1 first way (every single line show)
const myIntroduce = `I am a developer
I love code
I love to eat Chinese`;
console.log(myIntroduce)
// // Others way
const myIntroduce1 = ['I am a developer', 'I love code', 'I love to eat Chinese'];
myIntroduce1.forEach(myIntro => console.log(myIntro))
/*print:
I am a developer
I love code
I love to eat Chinese */

// Answer 03
const fullName = (first, last = 'Islam') =>{
    const myName = first + ' ' + last;
    return myName;
}
const name = fullName('Nurul');
console.log(name);  // Nurul Islam

/*
**** Practice Problem 2
Write an arrow function where it will do the following:
a.	It will take an array where the array elements will be the name of your friends
b.	Check if the length of each element is even, push elements with even length to a new array and return the result, Print the result.
 */ // Answer
const friends = (friend) => {
    const evenFriends = []
    for(let fr of friend){
        if(fr.length % 2 === 0){
            evenFriends.push(fr)
        }
    }
    return evenFriends;
}
const myFriend = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'sharukh khan'];
const evenFriend = friends(myFriend)
console.log(evenFriend)


/* Practice Problem 3
Write an arrow function where it will do the following:
a.	Square each array element
b.	Calculate the sum of the Squared elements
c.	Return the average of the sum of the squared elements. Print the result;
*/ // One way
const numbers = (array) => {
    let sum = 0;
    for (let a of array) {
        const square = a * a;
        sum = sum + square;
    }
    const average = sum / array.length;
    return average;
}
const num = [2, 3, 4]
const result = numbers(num)
console.log(result); // 9.66

// Other way
const numbers4 = [2, 5, 6, 9];
const doMath = num => {
    let squareNumber = [];
    let sum = 0;
    for(let i =0; i < num.length; i++){
        const square = Math.pow(num[i], 2);
        squareNumber.push(square);
        sum = sum + square;
    }
    average = sum / squareNumber.length
    return average;
}
const averageNumber = doMath(numbers4)
console.log(averageNumber) //36.5


/*Practice Problem 4 
Write an arrow function where it will do the following:
a.	It will take two array inputs
b.	Combine the two arrays and assign them in a new array
c.	Find the maximum number from the new array and return the result. Print the Result.
*/
const numbers5 = (array1, array2) => {
    const assignArray = [...array1, ...array2]
    const largest = Math.max(...assignArray)
    return largest;

}
const firstArray = [2, 3, 4];
const secondArray = [5, 6, 7];
const maximum = numbers5(firstArray, secondArray)
console.log(maximum)

