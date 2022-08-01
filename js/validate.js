const formLogin = document.querySelector(".modal__form");
const userEmailLogin = document.querySelector("input[id='email']");
const userPassWordLogin = document.querySelector("input[id='password']");





function showError(input,message="Lỗi đăng nhập"){
    const inputParent = input.parentElement;
    inputParent.nextElementSibling.innerText= message;   
    inputParent.lastElementChild.style.display = "none";    
}
function showSuccess(input){
    const inputParent = input.parentElement;
    inputParent.lastElementChild.style.display = "block";   
    inputParent.nextElementSibling.innerText= "";   
}
function checkEmptyError(input){
    var isEmpty = true;
    if(input.value.trim()===""){
        showError(input,"Trường này không được để trống !");
        isEmpty = false;
    }else{
        showSuccess(input);
    }
    return isEmpty;
}
function checkEmailError(input){
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regex.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,"Vui lòng nhập đúng địa chỉ email !");
    }
}
function checkPassWordError(input,min,max){
        if(input.value.length < min){
            showError(input,`Password phải có ít nhất ${min} ký tự`);
        }else if(input.value.length  > max){
            showError(input,`Password quá dài`);
        }
}

function handleFormLogin(){
        userEmailLogin.onblur = function(){
            checkEmptyError(userEmailLogin);
            if(!checkEmptyError(userEmailLogin)){

            }else{
                checkEmailError(userEmailLogin);
            }

        }
        userPassWordLogin.onblur = function(){
            checkEmptyError(userPassWordLogin);
            if(!checkEmptyError(userPassWordLogin)){

            }else{
                checkPassWordError(userPassWordLogin,5,10);
            }
        }
        formLogin.onsubmit = function(e){
            e.preventDefault();
        }
}
handleFormLogin();



export default handleFormLogin;