// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)         to include 9 at the starting of array.
// myArr.shift()            to remove elemnt from starting

// console.log(myArr.includes(9)); returns true or false

// console.log(myArr.indexOf(3));   returns index of element

// const newArr = myArr.join()   converts the array in form of string like 0,1,2,3,4,5

// console.log(myArr); 
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// splice manipulates original array but slice doesn't.