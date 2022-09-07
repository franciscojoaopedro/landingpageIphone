const spanElement=document.querySelectorAll("span")

spanElement.forEach((id)=>{
    console.log(id)
})
console.log()
const imgeSlider=(event)=>{
    document.querySelector("#phone").src=event
}