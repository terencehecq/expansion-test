import _ from 'lodash';


// -- Toggle burger menu class -- //
let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let shade = document.getElementById("shade");

burger.addEventListener("click", ()=>{
  burger.classList.toggle("open");
  menu.classList.toggle("opened");
  shade.classList.toggle("opened");
})


// -- Toggle inner menu classes -- //
let mainLinks = document.querySelectorAll(".main_menu>li");
let mainDrops = document.querySelectorAll(".main_menu>li>ul");

mainLinks.forEach((link)=>{
  link.addEventListener("click", ()=>{
    if(link.lastElementChild.classList.contains("main_opened")){
      link.lastElementChild.classList.remove("main_opened");
    }else{
      mainDrops.forEach(drop => drop.classList.remove("main_opened"));
      link.lastElementChild.classList.add("main_opened");
    }
  })
})