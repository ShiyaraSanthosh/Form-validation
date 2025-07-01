// form
function validform(event) {
    event.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const higherEducation = document.getElementById("higherEducation");
    const phoneno = document.getElementById("phoneno");
    const description = document.getElementById("description");
  
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const higherEducationValue = higherEducation.value;
    const phonenoValue = phoneno.value;
    const descriptionValue = description.value;
//username
    const usernameError = document.getElementById("usernameError");
    if (usernameValue === ''|| usernameValue === null){
        usernameError.innerHTML = "username is required";
        usernameError.style.color = "red";
    }
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    if(!usernameRegex.test(usernameValue)){
        usernameError.innerHTML = "valid username";
        
        usernameError.style.color = "green";
        let icon = document.createElement("i");
        icon.className = "fa fa-check-circle validation-icon w-full absolute top-[35px] ";
        icon.style.color = "#63E6BE";
        icon.style.marginLeft = "300px";
        username.parentElement.appendChild(icon);
      
        return true;
        
    } else {
        usernameError.innerHTML = "Invalid username";
        
        usernameError.style.color = "red";
        let icon = document.createElement("i");
        icon.className ="fa-solid fa-circle-xmark";
        icon. style.color = "red";
        icon.style.marginLeft = "5px";
        username.parentElement.appendChild(icon);
        return false;
    }

  //email 
   const emailError = document.getElementById("emailError");
   if (emailValue ===''|| emailValue=== null){
         emailError.innerHTML = "Email is required";
         emailError.style.color = "red";
   }
   const emailRegex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
   if (emailValue.test(emailRegex)){
    emailError.innerHTML = "valid email";
    emailError.style.color = "green";
    let icon = document.createElement("i");
    icon.className = "fa fa-check-circle validation-icon w-full absolute top-[35px] ";
    icon.style.color = "#63E6BE";
    icon.style.marginLeft = "300px";
    email.parentElement.appendChild(icon);
    return true;
    


   } else {
    emailError.innerHTML = "Invalid email";
    emailError.style.color = "red";
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-circle-xmark";
    icon.style.color = "red";
    icon.style.marginLeft = "5px";
    email.parentElement.appendChild(icon);
    return false;
   }
}
  
  //character count
  const charcount = document.getElementById("char-count");
  const description = document.getElementById("description");
  const maxLength = 150;
  description.addEventListener("input", function () {
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