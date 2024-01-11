let colors=["red","green","blue","black","white","grey","purple"]
const btn=document.getElementById('btn')
console.log(btn)
let index=0;
function selectColor(){
    // if(index===colors.length-1)
    // index=0;
    let randomIndex=randomNumber()
    let color=colors[randomIndex]
    console.log(color)
    document.body.style.backgroundColor=color
    document.querySelector('color').textContent=color;

}
btn.addEventListener('click',function(){
    selectColor()
})
function randomNumber(){
    return Math.floor(Math.random() * colors.length)
}