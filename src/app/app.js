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
            header.style.background=color,
            box.style.boxShadow=`2px 10px 23px ${color}`,
            imageIphone.src=url
        )
    }
    allSpan.forEach((element)=>{
        element.addEventListener('click', async() =>{
            if(element.id==="green")await changeHandleCor("#384837",listImage.green);
            if(element.id==="pink")await changeHandleCor("#f8ddd6",listImage.pink);
            if(element.id==="blue")await changeHandleCor("#225f7e",listImage.blue);
            if(element.id==="black")await changeHandleCor("#192028",listImage.black);
            if(element.id==="white")await changeHandleCor("#f7f2ee",listImage.white)
            if(element.id==="red")await changeHandleCor("#ae0617",listImage.red);
        })
    })
    console.log(cirle.style.background)
}

App();

