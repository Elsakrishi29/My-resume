let button = document.querySelector(".arrow"),
    links = document.querySelector(".nav-links");

    button.addEventListener("click",()=>{
        links.classList.toggle("display");
    })

const list=document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',activeLink));
