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
    },
    {
      "firstName": "Batholomew",
      "lastName": "Eim",
      "email": "beim2@goodreads.com",
      "salary": "$7.26",
      "isEngineer": true,
      "gender": "Male"
    },
    {
      "firstName": "Ritchie",
      "lastName": "Ferreira",
      "email": "rferreira3@booking.com",
      "salary": "$4.07",
      "isEngineer": true,
      "gender": "Male"
    },
    {
      "firstName": "Kaylyn",
      "lastName": "Ivain",
      "email": "kivain4@gmpg.org",
      "salary": "$5.89",
      "isEngineer": false,
      "gender": "Female"
    },
    {
      "firstName": "Wilhelmina",
      "lastName": "Portigall",
      "email": "wportigall5@plala.or.jp",
      "salary": "$2.06",
      "isEngineer": false,
      "gender": "Female"
    },
    {
      "firstName": "Rouvin",
      "lastName": "Gillcrist",
      "email": "rgillcrist6@aol.com",
      "salary": "$7.29",
      "isEngineer": true,
      "gender": "Male"
    },
    {
      "firstName": "Flemming",
      "lastName": "Scroggins",
      "email": "fscroggins7@msu.edu",
      "salary": "$7.54",
      "isEngineer": false,
      "gender": "Male"
    },
    {
      "firstName": "Sallee",
      "lastName": "Schlagh",
      "email": "sschlagh8@reuters.com",
      "salary": "$2.24",
      "isEngineer": false,
      "gender": "Female"
    },
    {
      "firstName": "Roxine",
      "lastName": "Bedo",
      "email": "rbedo9@whitehouse.gov",
      "salary": "$6.47",
      "isEngineer": false,
      "gender": "Female"
    }
  ]

  //Create a function that is receiving a collection of employees and returns a string containing emails in the following format 
  //email1@example.com//email2@example.com//email3@example.com

   let joinEmail = employees.map((val)=>{
    return val.email
   })
   console.log(joinEmail.join(" // ").toString())

 function arrayPrototypeMyJoin (val){
   let joinnArr =[]
  for(let i = 0; i < val.length; i++){
  joinnArr.push(val[i].email)
  }
return joinnArr.join(" // ")
}
console.log(arrayPrototypeMyJoin(employees))



   //Create a function that is receiving a collection of employees and returns a string with comma-separated email: salary 

   let joinEmailComma = employees.map((val)=>{
   return val.email})
   let join =joinEmailComma.join( ", " ).toString()
   console.log(join)

     console.log(typeof(join))


//Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join


 



function myJoin (val){
  let joinnArr =[]

 for(let i = 0; i < val.length; i++){
 
 joinnArr.push(val[i].email)

}

 k = Array.prototype.join.cell("//")
return  k

}
console.log(myJoin(employees))

function f(a, b, c) {
  var s = Array.prototype.join(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);