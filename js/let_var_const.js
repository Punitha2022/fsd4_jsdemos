let x=10;
let y=20;
console.log(x+y)
function letAndVarDemo(x,y){
    console.log(_var)//hoisting
    const NAME="JOHN"
    console.log(NAME)
    console.log(x+y);
   // NAME="James"
   // console.log(NAME)
    for(let i=0;i<2;i++){
    console.log(i)
    }
    //console.log('i value is ' + i)
    var _var='Hello'
    console.log(_var)
    var _var="Hello World"
    console.log(_var)
}
letAndVarDemo(x,y);