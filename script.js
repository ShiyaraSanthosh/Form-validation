// form
function validform() {
    const username= document.getElementById("username").value;
    const email = document.getElementById("email").value;       
    const password = document.getElementById("password").value;
    const higherEducation = document.getElementById("higherEducation").value;
    const phoneno = document.getElementById("phoneno").value;
    const description = document.getElementById("description").value;
    if(username==='' || email==='' || password==='' || higherEducation==='' || phoneno==='' || description==='')
    {
        alert("you can't sumbit form without filling all the fields");
        return false;
    }
    if(username===''){
       alert("Username cannot be empty");
       return false;
    }
    const usernameRegex= /^[a-zA-Z0-9]{3,}$/;
    if(!usernameRegex.test(username)){
        username.parentElement.textcontent ='<i class="fa fa-check-circle" aria-hidden="true" ></i>';
        username.style.color = "#63E6BE";
        return true;
    } else {
        username.parentElement.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>';
        return false;
    }
    if(email===''){
        alert("Email cannot be empty");
        return false;
    }

}












//character count
const charcount = document.getElementById("char-count");
const description = document.getElementById("description");
const maxLength = 150;
description.addEventListener("input",function(){
    const inputLength = description.value.length;
    charcount.innerHTML = inputLength;
    if (inputLength >= maxLength) {
        inputField.style.backgroundColor = "#e74c3c";
        inputField.style.color = "#ffffff";
      } else {
        inputField.style.backgroundColor = "";
        inputField.style.color = "";
      }

});