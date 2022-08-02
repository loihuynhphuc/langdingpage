const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const header= $(".header");
const btnSingIn = $(".header__sigin");
const modalLogIn = $(".modal");
const btnSingInClose = $(".btn-login-close");
const customerBox = $$(".customer");
const btnSlides = $$(".btn-slide__item");
const btnDropDowns = $$(".drop-down");
const btnBackSroll = $(".btn-back");
const btnLogOut = $(".btn-logout");
const boxLogOut = $(".notify-logout");


// import validator
import handleFormLogin from "./validate.js"

function handleBtnLogOut(){
  btnLogOut.onclick = function(){
    boxLogOut.style.display = "block";
  }
}

function handleBtnScrollBack(valueScrollTop){
  console.log(valueScrollTop);
        if(valueScrollTop > 600){
          btnBackSroll.classList.add("openScroll");   
          btnBackSroll.onclick=function(){
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          };        
        }else{
          btnBackSroll.classList.remove("openScroll");
        }
}


function handleDropDown(){
      btnDropDowns.forEach(btnDropDown=>{
            btnDropDown.onclick = function(){
              this.classList.toggle("openRotate");
              this.parentElement.querySelector(".nav-box-childs").classList.toggle("show");
            }
      })
}

function changeActiveBtnSlide (currentIndex){
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
        const valueScrollTop = document.documentElement.scrollTop.toFixed();
          if(valueScrollTop > 300){
              header.style.animation = `slideDown linear ${duration}s`;
                header.classList.add("header-sticky");
          }else if(valueScrollTop < 200){
            header.style.animation = `slideTop linear ${duration}s`;
            header.classList.remove("header-sticky");
          }
          handleBtnScrollBack(valueScrollTop);
      }
      
}


function start(){
  handleBtnLogOut();
  handleDropDown();
  handleFormLogin();
  handleBtnLogIn();
  handleHeaderStick(1);
  slideCustomerBox();
}
start();