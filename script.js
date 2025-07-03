function validateField(inputElement, value, regex, errorElement, emptyMsg, invalidMsg, validMsg) {
  let icon = document.createElement("i");
  const DuplicateIcon = inputElement.parentElement.querySelector(".validation-icon");
if (DuplicateIcon) {
  DuplicateIcon.remove();
}
icon.classList.add("validation-icon");

  if (value === "") {
    errorElement.innerHTML = emptyMsg;
  errorElement.style.color = "red";

    
    isValid = false;

  } else if (!regex.test(value)) {
    errorElement.innerHTML = invalidMsg;
    errorElement.style.color = "red";
    inputElement.style.borderColor = " red";
    inputElement.style.borderWidth = "2px";
    
  icon.className += " fa-solid fa-circle-xmark";
  icon.style.color = "red";
    
    inputElement.parentElement.appendChild(icon);

    isValid = false;

  } else {
    errorElement.innerHTML = validMsg;
    errorElement.style.color = "green";
    inputElement.style.borderColor = " green";
    inputElement.style.borderWidth = "2px";
    icon.className = "fa fa-check-circle validation-icon absolute top-[38%] right-[40px] left-[80px]"; 
   
    icon.style.color = "#63E6BE";
    icon.style.marginLeft = "300px";
    inputElement.parentElement.appendChild(icon);

    isValid = true;

  }
}




function validform(event) {
  event.preventDefault();

  let isValid = true;

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const higherEducation = document.getElementById("higherEducation");
  const phoneno = document.getElementById("phoneno");
  const description = document.getElementById("description");
  const country = document.getElementById("country");
  const age = document.getElementById("age");

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const phonenoValue = phoneno.value.trim();
  const higherEducationValue = higherEducation.value.trim();
  const countryValue = country.value.trim();
  const descriptionValue = description.value.trim();
  const ageValue = age.value.trim();



  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const phonenoError = document.getElementById("phonenoError");
  const educationError = document.getElementById("EducationError");
  const countryError = document.getElementById("countryError");
  const DescriptionError = document.getElementById("DescriptionError");
  const ageError = document.getElementById("ageError");



  validateField(username, usernameValue, /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/, usernameError, "Username cannot be empty", "Username must be at least 3 characters long and contain only letters and numbers", "Valid username");


  validateField(email, emailValue, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, emailError, "Email cannot be empty", "Invalid email format", "Valid email");

  validateField(password, passwordValue,  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8,}$/, passwordError, "Password cannot be empty", "Password must be at least 8 characters long and contain at least one uppercase letter and one number", "Valid password");

  validateField(phoneno, phonenoValue, /^(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}$/, phonenoError, "Phone number cannot be empty", "Phone number must be exactly 10 digits", "Valid phone number");
  
  validateField(higherEducation, higherEducationValue, /.+/, educationError, "Higher education cannot be empty", "Please select an option", "Valid selection");
  
  validateField(country, countryValue, /.+/, countryError, "Country cannot be empty", "Please select a country", "Valid selection");

  validateField(description, descriptionValue, /^.{1,150}$/, DescriptionError, "Description cannot be empty", "Description must be between 1 and 150 characters", "Valid description");
   
  validateField(age, ageValue, /^(1[89]|[2-9][0-9]|1[01][0-9]|120)$/, ageError, "Age cannot be empty", "Age must be a number between 18 and 120", "Valid age");
    
  }

//Character count
const description = document.getElementById("description");
const charcount = document.getElementById("char-count");
const maxLength = 150;

description.addEventListener("input", function () {
  const inputLength = description.value.length;
  charcount.innerHTML = inputLength;

  if (inputLength >= maxLength) {
    description.style.backgroundColor = "#e74c3c";
    description.style.color = "#ffffff";
  } else {
    description.style.backgroundColor = "";
    description.style.color = "";
  }
});
  // table value entry
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event){
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var higherEducation = document.getElementById("higherEducation").value;
  var phoneno = document.getElementById("phoneno").value;
  var description = document.getElementById("description").value;
  var country = document.getElementById("country").value;
  var age = document.getElementById("age").value;
  

  var table =  document.querySelector(".table tbody");
  var newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td class="px-4 py-2 border">${table.rows.length + 1}</td>
    <td class="px-4 py-2 border">${username}</td>
    <td class="px-4 py-2 border">${email}</td>
    <td class="px-4 py-2 border">${password}</td>
    <td class="px-4 py-2 border">${higherEducation}</td>
    <td class="px-4 py-2 border">${phoneno}</td>
    <td class="px-4 py-2 border">${description}</td>
    <td class="px-4 py-2 border">${country}</td>
    <td class="px-4 py-2 border">${age}</td>
    `;
    table.appendChild(newRow);
});