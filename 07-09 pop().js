//Create a function that is receiving an array and returns reversed one using pop()

let myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

let reversArr=[]
let j=0

 function reversArrPop(val){
for(let i = val.length-1; i >= 0; i--){  
 reversArr[j]=val[i]
 j+=1
}
return reversArr.pop()
}
console.log(reversArrPop(myFish))


let stringText ="Hello   vorld"
let newStringText = ""
function reversArrPop(val){
  for(let i = val.length-1; i >= 0; i--){  
   newStringText +=val[i]
  
  }
  return newStringText
}
console.log(reversArrPop(stringText))




const text = 'Anona';

function isPlaindrome(text) {
	for (let i = 0; i < Math.floor(text.length / 2); i++) {    
    if (text[i] != text[text.length - 1 - i]) {
    	return true;
    }
  }

	return false;
}

console.log(isPlaindrome(text));