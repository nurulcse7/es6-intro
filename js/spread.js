const max = Math.max(12, 85, 999, 78);
// console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [444, 78, ...numbers, 111, 33]



// Quiz 08
// const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
// const array2 = [...nayikas]
// console.log(array2)  // [ 'mousumi', 'popy', 'shabnur', 'purnima' ]