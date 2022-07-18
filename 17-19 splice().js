debugger

//Using the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive. 
/*
let array = ['angel', 'clown',"", 'mandarin', 'sturgeon']


let arr =array.map((val)=>{
if (val === undefined){
    return val
}
})
console.log(arr.splice(1))

//Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers

*/
function foo(nums) {
    nums.sort((a,b)=>a-b).forEach((nums,i) => {
        if(nums[i] === nums[i+1]){
            nums.splice(i,1)
          } 
    });
    
     return nums
  }
  console.log(foo([1,2,3,2,1,4,5,6,41,25]));