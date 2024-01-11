let numbers=[10,2,1,3,4,5,11,23,56];
numbers.forEach(n=>console.log(n))
let names=["james","smith","john","adam","clara"]
names.forEach((name,index,names)=>{
    console.log(name)
}
)
const evenNumbers=numbers.filter(n=>n%2==0)
const oddNumbers=numbers.filter(n=>n%2!==0)
console.log(evenNumbers)
console.log(oddNumbers)
const filterNames=names.filter(name=>name.startsWith('j'))
console.log(filterNames)
//to search for a particular element in an array

            //FILTER method
console.log(names.includes("cla"))
const namesContainsA=names.filter(name=>name.includes('a'))
console.log(namesContainsA)

            //MAP method
const square=numbers.map((n)=>n*n)
console.log(square)
const capitalize=names.map(name=>name.toUpperCase())
console.log(capitalize)

             //find method
const nameIncludesA=names.find(name=>name.includes('a'))
console.log(nameIncludesA)
const firstEvenNumber=numbers.find(n=>n%2==0)
console.log(firstEvenNumber)

            //Reduce method (left to right)    numbers=[10,2,1,3,4,5,11,23,56];
const sum=numbers.reduce((prevSum,num)=>prevSum+num,0)
console.log(sum)
const product=numbers.reduce((prevValue,num)=>prevValue*num,1)
console.log(product)

             //ReduceRight (starts from right side of an array right->left)
const nums=[1,3,4,15,45,100]
const diff=nums.reduceRight((prevDiff,n)=>prevDiff-n)
console.log(diff)
             //shift and unshift
console.log(nums)
nums.unshift(200)   //Adds elements to the front of an array
console.log(nums)
nums.shift() //removing the front element
console.log(nums)
              //splice (startIndex,deleteCount,...items)
let values=[10,20,30,40,50]
console.log(values)
values.splice(2,1,80,90,100)// startIndex=2, deleteCount=1, items[]=80,90,100
console.log(values)
console.log(values.slice(2,5))
//slice will return an subarray without modifying the original array
//splice will remove and add new items in the original array