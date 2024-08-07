const colorContent=document.querySelector('.colorBox')
const h3=document.createElement('h3')
const reset=document.getElementById('reset')
const btn=document.getElementById("btn")
btn.addEventListener('click',function(){
    let letters="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=letters[(Math.floor(Math.random()*16))]
    }
    colorContent.style.backgroundColor=color
    h3.textContent=color
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