const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const header= $(".header");
const btnSingIn = $(".header__sigin");
const modalLogIn = $(".modal");
const btnSingInClose = $(".btn-login-close");
const customerBox = $$(".customer");
const btnSlides = $$(".btn-slide__item");
const btnDropDowns = $$(".drop-down");
console.log(btnDropDowns);

// import validator
import handleFormLogin from "./validate.js"

function handleDropDown(){
      btnDropDowns.forEach(btnDropDown=>{
            btnDropDown.onclick = function(){
              this.classList.toggle("openRotate");
              this.parentElement.querySelector(".nav-box-childs").classList.toggle("show");
            }
      })
}

function changeActiveBtnSlide (currentIndex){
  // console.log(currentIndex);
    btnSlides.forEach((btnSlide)=>{
          if(btnSlide.className==="btn-slide__item current-slide"){
              btnSlide.className ="btn-slide__item";
          }
    })
    btnSlides[currentIndex].classList.add("current-slide");
}

function slideCustomerBox(){
let currentIndex = 0;
setInterval(function(){
    if(currentIndex<customerBox.length){
      customerBox.forEach(function(customer){
        customer.style.transform = `translateX(${-100 * currentIndex}%)`;
      })
      changeActiveBtnSlide (currentIndex)
      currentIndex+=1; 
    }else{
      currentIndex=0;
    }
   },3000);
}


function handleBtnLogIn(){
  btnSingIn.addEventListener("click",()=>{
        modalLogIn.classList.add("open");
  })
  btnSingInClose.addEventListener("click",()=>{
      modalLogIn.classList.remove("open");
  })
  
}

function handleHeaderStick(duration){
      window.onscroll= function(){
          if(document.documentElement.scrollTop.toFixed()> 300){
              header.style.animation = `slideDown linear ${duration}s`;
                header.classList.add("header-sticky");
          }else if(document.documentElement.scrollTop.toFixed()< 200){
            header.style.animation = `slideTop linear ${duration}s`;
            header.classList.remove("header-sticky");
          }
      }
}


function start(){
  handleDropDown();
  handleFormLogin();
  handleBtnLogIn();
  handleHeaderStick(1);
  slideCustomerBox();
}
start();