let array1=[10,23,12,122]
//let array2=array1;//both are referring same memory address
let array2=[...array1]//spread operator - shallow copy
console.log(array1);
console.log(array2)
array1.push(100)
console.log(array1);
console.log(array2)
array2.pop()
console.log(array1);
console.log(array2)
square(array2)
console.log(array2)
function square([...array]){
    for(let i=0;i<array.length;i++){
    array[i]=array[i]*array[i]
    }
    console.log(array)
}