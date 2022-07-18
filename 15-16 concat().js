debugger
let arr=[1,5,6,9,4,2,"Jon","Jec",88]
let arr2 =[55,6,2,1,88,"Sem"]

function concat(arr1,arr2){
let finnal =[]
k=0
 for(let i=0;i<arr1.length;i++){
    for(let j=0;j<=arr2.length;j++){
        if(arr1[i]===arr2[j] && i!=j){
            continue
        } 
        finnal.push(arr2[j])
     } 
  }
  return finnal
}

console.log(concat(arr,arr2)
)/*
let concat = arr.concat(arr2)


const result = concat.reduce((finalArray, current) => {
    let concatArr = finalArray.find((item) => item === current);
    if (concatArr) {
      return finalArray;
    }
    return finalArray.concat([current]);
  }, []);
   
  console.log( result);
  */