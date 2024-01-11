const myBtn=document.getElementsByClassName('my-btn');
myBtn[0].addEventListener('click',function(){
    const fname=document.getElementById('firstname').value
    const lname=document.getElementById('lastname').value
    
    document.getElementById('welcome').innerText=
    `Welcome ${capitalize(fname)} ${capitalize(lname)}`
})
function capitalize(name)
{
    return name.charAt(0).toUpperCase() + name.slice(1)
}

// function welcome(){
//     const fname=document.getElementById('firstname').value
//     const lname=document.getElementById('lastname').value
//     document.getElementById('welcome').innerText=`Welcome ${fname} ${lname}`
// } 