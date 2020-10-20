import _ from 'lodash';


// -- CURSOR -- //
let cursor = document.getElementById('cursor');
let search = document.getElementById("search_icon");
let field = document.getElementById("search_field");

document.addEventListener('mousemove', (e)=>{

  // Cursor positionning
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';

  // hover on search
  let searchPos = search.getBoundingClientRect();
  let dFromCenter = searchPos.width/1.2;
  let searchX = searchPos.left + searchPos.width/2;
  let searchY = searchPos.top + searchPos.width/2;
  let cx = e.clientX;
  let cy = e.clientY;

  console.log(cx-searchX," - ", cy-searchY);

  if(cx > searchX-dFromCenter && cx < searchX+dFromCenter && cy > searchY-dFromCenter && cy < searchY+dFromCenter){
    search.style.transform = "translate("+ Math.round(cx-searchX) + "px," + Math.round(cy-searchY) +"px)";
    cursor.classList.add("hover");
    search.classList.add("hover")
  }else{
    search.style.transform = "translate(0,0)";
    cursor.classList.remove("hover");
    search.classList.remove("hover");
  }
});



// -- Focus on search field -- //
search.addEventListener("click", ()=>{
  field.focus();
});




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


// -- Toggle drop "Plus" menu -- //
let more = document.getElementById("more");

more.addEventListener("click", ()=>{
  more.classList.toggle("sec_opened")
  more.nextElementSibling.classList.toggle("sec_opened");
})


