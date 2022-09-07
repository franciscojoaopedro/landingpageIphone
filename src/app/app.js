const allSpan=document.querySelectorAll("span")
const imageIphone=document.getElementById("phone")
const header=document.querySelector('header')
const cirle=document.querySelector('.circle')
const box=document.querySelector('.box')

const App=()=>{
    console.log(box.style)
    const listImage={
        green:src=("../../img/green.png"),
        pink:"../../img/pink.png",
        blue:"../../img/blue.png",
        black:"../../img/black.png",
        white:"../../img/white.png",
        red:"../../img/red.png",
    }
    const changeHandleCor=(color,url)=>{
        return(
            cirle.style.background=color,
            header.style.background=color,
            box.style.boxShadow.color=color,
            imageIphone.src=url
        )
    }
    allSpan.forEach((element)=>{
        element.addEventListener('click', async() =>{
            if(element.id==="green")changeHandleCor("#384837",listImage.green);
            if(element.id==="pink")changeHandleCor("#f8ddd6",listImage.pink);
            if(element.id==="blue")changeHandleCor("#225f7e",listImage.blue);
            if(element.id==="black") changeHandleCor("#192028",listImage.black);
            if(element.id==="white")changeHandleCor("#f7f2ee",listImage.white)
            if(element.id==="red")changeHandleCor("#ae0617",listImage.red);
        })
    })
    console.log(cirle.style.background)
}

App();

