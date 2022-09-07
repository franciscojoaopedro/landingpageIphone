const allSpan=document.querySelectorAll("span")
const imageIphone=document.getElementById("phone")
const cirle=document.querySelector('.circle')
const listImage={
    green:src=("../../img/green.png"),
    pink:"../../img/pink.png",
    blue:"../../img/blue.png",
    black:"../../img/black.png",
    white:"../../img/white.png",
    red:"../../img/red.png",
}

const App=()=>{
    const selectImage=()=>{
        if(element.id==="green")imageIphone.src=listImage['green'];
        if(element.id==="pink")imageIphone.src=listImage['pink'];
        if(element.id==="blue")imageIphone.src=listImage['blue'];
        if(element.id==="black")imageIphone.src=listImage['black'];
        if(element.id==="white")imageIphone.src=listImage['white'];
        if(element.id==="red")imageIphone.src=listImage['red'];
    }
    allSpan.forEach((element)=>{
        element.addEventListener('click', async() =>{
            if(element.id==="green"){
                cirle.style.background="blue"
               return imageIphone.src=listImage.green;

            }
            if(element.id==="pink")imageIphone.src=listImage.pink;
            if(element.id==="blue")imageIphone.src=listImage['blue'];
            if(element.id==="black")imageIphone.src=listImage['black'];
            if(element.id==="white")imageIphone.src=listImage['white'];
            if(element.id==="red")imageIphone.src=listImage['red'];
        })
    })
    console.log(cirle.style.background)
}

App();

