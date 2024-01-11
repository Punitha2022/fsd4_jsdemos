const print=(obj)=>console.log(obj)

let product={'title':'laptop','price':40000}
let user={'name':'james','email':'james@gmail.com','password':'123'}
let address={'street':'xyz','city':'chn','pincode':'600109'}
let employee={'name':'john',salary:10000,department:'IT'}
// print(product)
// print(user)
// print(employee)
// console.log(Object.keys(product))
// console.log(Object.values(product))
// console.log(Object.entries(product))
// Object.entries(product).forEach(([key,value])=>{
//     console.log(`${key} ${value}`)
// })
let user_details={...user,...address}
//console.log(user_details)
const combinedObj=Object.assign({},employee,address)
//console.log(combinedObj)

//Object destructing;
const {name,email}=user

//Object freeze - Immutable object
Object.freeze(employee)
console.log('employee ' + JSON.stringify(employee))
delete employee.salary //trying to delete salary from employee
console.log(employee)

Object.seal(user)  //modify the values, but cannot add / remove properties
user.gender='Male'
console.log(user)
user.name='Adam'
console.log(user)


//JSON
const student={'name':'james','age':10,'gender':'male'}
console.log('student details ' + JSON.stringify(student))
const emp='{"name":"adam","age":20}'
console.log(JSON.parse(emp))