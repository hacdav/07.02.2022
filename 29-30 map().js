
const employees = [
    {
      "firstName": "Arabela",
      "lastName": "Fockes",
      "email": "afockes0@wired.com",
      "salary": 6.18,
      "isEngineer": true,
      "gender": "Female"
    },
    {
      "firstName": "Bryant",
      "lastName": "Marchi",
      "email": "bmarchi1@theatlantic.com",
      "salary": 8.05,
      "isEngineer": false,
      "gender": "Male"
    },
    {
      "firstName": "Batholomew",
      "lastName": "Eim",
      "email": "beim2@goodreads.com",
      "salary": 7.26,
      "isEngineer": true,
      "gender": "Male"
    },
    {
      "firstName": "Ritchie",
      "lastName": "Ferreira",
      "email": "rferreira3@booking.com",
      "salary": 4.07,
      "isEngineer": true,
      "gender": "Male"
    },
    {
      "firstName": "Kaylyn",
      "lastName": "Ivain",
      "email": "kivain4@gmpg.org",
      "salary": 5.89,
      "isEngineer": false,
      "gender": "Female"
    },
    {
      "firstName": "Wilhelmina",
      "lastName": "Portigall",
      "email": "wportigall5@plala.or.jp",
      "salary": 2.06,
      "isEngineer": false,
      "gender": "Female"
    },
    {
      "firstName": "Rouvin",
      "lastName": "Gillcrist",
      "email": "rgillcrist6@aol.com",
      "salary": 7.29,
      "isEngineer": true,
      "gender": "Male"
    },
    {
      "firstName": "Flemming",
      "lastName": "Scroggins",
      "email": "fscroggins7@msu.edu",
      "salary": 7.54,
      "isEngineer": false,
      "gender": "Male"
    },
    {
      "firstName": "Sallee",
      "lastName": "Schlagh",
      "email": "sschlagh8@reuters.com",
      "salary": 2.24,
      "isEngineer": false,
      "gender": "Female"
    },
    {
      "firstName": "Roxine",
      "lastName": "Bedo",
      "email": "rbedo9@whitehouse.gov",
      "salary": 6.47,
      "isEngineer": false,
      "gender": "Female"
    }
  ]


//Using the map, write a function to clone an array
let arr =[1,2,3,2,1,4,5,6,41,25];

function clonArrMap(val){
    let map= val.map((itm)=>{
        return itm
    })
    return map
}

console.log(clonArrMap(arr))


//Using the map write a function that returns an array containing only firstNames of all  employees 

debugger
function firsNameMap(firstname){
    let map = firstname.map((val)=>{
        return val.firstName
    })
    return map
}
console.log(firsNameMap(employees))