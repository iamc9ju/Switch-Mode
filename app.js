const icon = document.querySelector("i");
const text = document.querySelector("h2");
const body = document.querySelector("body");

icon.addEventListener("click",function(){
    this.classList.toggle("bi-moon-stars-fill");
    if(this.classList.toggle("bi-brightness-high-fill")){
        text.innerText ="โหมดกลางวัน";
        body.style.background="white";
        body.style.color="Black"
        body.style.transition="1s";
    }else{
        text.innerText ="โหมดกลางคืน";
        body.style.background="Black";
        body.style.color="White"
        body.style.transition="1s";
    }
})