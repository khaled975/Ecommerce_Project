const bar=document.querySelector(".mobile")
const close=document.querySelector(".close")
const nav=document.querySelector("header ul")
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}
// get product details
let mainImg= document.getElementById("mainImg")
let selectedImg=document.querySelectorAll(".products .item img")
selectedImg.forEach((item)=>{item.addEventListener("click",()=>{
    window.location.href="productdetail.html"
    mainImg.src=item.src
})})

// img carsoul
let imgs= document.querySelectorAll(".product-imgs div img")
imgs.forEach((item)=>{item.addEventListener("click",()=>{
    mainImg.src=item.src
})})
