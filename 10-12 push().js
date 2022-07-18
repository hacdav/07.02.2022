debugger
const employees = [
    {
      "firstName": "Arabela",
      "lastName": "Fockes",
      "email": "afockes0@wired.com",
      "salary": "$6.18",
      "isEngineer": true,
      "gender": "Female"
    },
    {
      "firstName": "Bryant",
      "lastName": "Marchi",
      "email": "bmarchi1@theatlantic.com",
      "salary": "$8.05",
      "isEngineer": false,
      "gender": "Male"
    },]
  
//reate a function that is receiving a number and returns an array which is containing all even digits. Use push method 
/*
let arrNumber = [1,2,3,4,5,6,7,8,9,1,1]
 
function isPlaindrome(number) {
    let arrEvenNumber= []
	for (let i = 0; i< number.length; i++) {    
    if (number[i] % 2 === 0) {
    	arrEvenNumber.push(number[i])
    }
  }

	return arrEvenNumber
}

console.log(isPlaindrome(arrNumber));

*/

function isPlaindrome(items) {
    let arrEvenNumber= [{
        "firstName": "Arabela",
        "lastName": "Fockes",
        "email": "afockes0@wired.com",
        "salary": "$6.18",
        "isEngineer": true,
        "gender": "Female"
      }]
	for (let i = 0; i< items.length; i++) {    
    
    	arrEvenNumber.push(items[i])
    
  }

	return arrEvenNumber
}

console.log(isPlaindrome(employees)); 