const add=(x,y)=> x+y;

const sub=(x,y)=> x-y; 

const mul=(x,y)=>x*y

const div=(x,y)=> x/y

console.log(add(1,3))
console.log(sub(3,4))

let numbers=[10,30,40,60,50,22,42]
//version 1
numbers.forEach(function(n,i){
    console.log(n + " " + i)
})
//version 2 - using arrow function
numbers.forEach((n,i)=>console.log(n+ " " + i))




