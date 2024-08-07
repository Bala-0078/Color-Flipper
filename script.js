const colorContent=document.querySelector('.colorBox')
const h3=document.createElement('h3')
const reset=document.getElementById('reset')
//console.log(colorContent)
const btn=document.getElementById("btn")
btn.addEventListener('click',function(){
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    const bg=`rgb(${r},${g},${b})`
    colorContent.style.backgroundColor=bg
    h3.textContent=bg
    h3.style.textAlign="center"
    h3.style.fontFamily="Edu AU VIC WA NT Hand"
    h3.style.color="rebeccapurple"
    h3.style.fontSize="30px"
    colorContent.appendChild(h3)
})
reset.addEventListener('click',function(){
    colorContent.style.backgroundColor="rgb(229, 229, 247)"
    colorContent.removeChild(h3)
})