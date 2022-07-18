
//Using from, write a JavaScript function to clone an array
let arr = [1,2,3,4,5,6,8,9,"Jec","Jon",1,2,3,4]

function clonArray (clon){
let clonArray = Array.from(clon)
return clonArray
}
console.log(clonArray(arr))

//Using from, and Set create a function that is removing duplicates from an array
function fromSetNumber(){
    let filtrNamberSet = Array.from(new Set(arr))
    return filtrNamberSet
    }
console.log(fromSetNumber(arr)) 


//Using from, turn the string into an array

let str = "Hello world"
console.log(Array.from(str))
