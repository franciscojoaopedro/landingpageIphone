const allSpan=document.querySelectorAll("span")
const imageIphone=document.getElementById("phone")
const header=document.querySelector('header')
const cirle=document.querySelector('.circle')
const box=document.querySelector('.box');
const url={
    green:"../../img/green.png",
    pink:"../../img/pink.png",
    black:"./img/black.png",
    blue:"./img/blue.png",
    white:"./img/white.png",
    red:"./img/red.png",
 }

 
    const changeHandleCor=(color,url)=>{
        return(
            header.style.background=color,
            box.style.boxShadow=`2px 10px 23px ${color}`,
            imageIphone.src=url
        )
    }
    allSpan.forEach((element)=>{
        element.addEventListener('click', async() =>{
            if(element.id==="green")await changeHandleCor("#384837",url.green);
            if(element.id==="pink")await changeHandleCor("#f8ddd6",url.pink);
            if(element.id==="blue")await changeHandleCor("#225f7e",url.blue);
            if(element.id==="black")await changeHandleCor("#192028",url.black);
            if(element.id==="white")await changeHandleCor("#f7f2ee",url.white)
            if(element.id==="red")await changeHandleCor("#ae0617",url.red);
        })
    })



