//Write a function to check whether an `input` is an array or not. Provide 2 different solutions 

//Write a function to find the difference of two arrays
let array1 = [1,2,3]
let array2 = [1,2,3,4,5,6];
let difference = array2.filter(item=> !array1.includes(item))
console.log(difference);

//Write a function that will receive the length and the value and will return a pre-filled array 
let array = Array(100).fill(5)
console.log(array);