function validateField(
  inputElement,
  value,
  regex,
  errorElement,
  emptyMsg,
  invalidMsg,
  validMsg
) {
  let isValid = false;
  const iconClasses = "absolute top-1/2 right-3 transform -translate-y-1/2";

  const existingIcon =
    inputElement.parentElement.querySelector(".validation-icon");
  if (existingIcon) {
    existingIcon.remove();
  }

  let icon = document.createElement("i");
  icon.classList.add("validation-icon");
  icon.className = `validation-icon ${iconClasses}`;

  if (value === "") {
    errorElement.innerHTML = emptyMsg;
    errorElement.className = "text-sm mt-1 block text-red-600";
    inputElement.className =
      inputElement.className.replace(/border-red-500|border-green-500/g, "") +
      " border-red-500";
    isValid = false;
  } else if (!regex.test(value)) {
    errorElement.innerHTML = invalidMsg;
    errorElement.className = "text-sm mt-1 block text-red-600";
    inputElement.className =
      inputElement.className.replace(/border-red-500|border-green-500/g, "") +
      " border-red-500";

    icon.className += " fa-solid fa-circle-xmark text-red-500";
    inputElement.parentElement.appendChild(icon);
    isValid = false;
  } else {
    errorElement.innerHTML = validMsg;
    errorElement.className = "text-sm mt-1 block text-green-600";
    inputElement.className =
      inputElement.className.replace(/border-red-500|border-green-500/g, "") +
      " border-green-500";

    icon.className += " fa-solid fa-check-circle text-green-500";
    inputElement.parentElement.appendChild(icon);
    isValid = true;
  }

  return isValid;
}

function validform(event) {
  event.preventDefault();

  const fields = {
    username: {
      element: document.getElementById("username"),
      regex: /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
      errorElement: document.getElementById("usernameError"),
      emptyMsg: "Username cannot be empty",
      invalidMsg: "Username must be 3-16 characters and start with a letter",
      validMsg: "Valid username",
    },
    email: {
      element: document.getElementById("email"),
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorElement: document.getElementById("emailError"),
      emptyMsg: "Email cannot be empty",
      invalidMsg: "Invalid email format",
      validMsg: "Valid email",
    },
    password: {
      element: document.getElementById("password"),
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8,}$/,
      errorElement: document.getElementById("passwordError"),
      emptyMsg: "Password cannot be empty",
      invalidMsg:
        "Password must have 8+ characters, uppercase, lowercase, number and special character",
      validMsg: "Valid password",
    },
    phoneno: {
      element: document.getElementById("phoneno"),
      regex: /^\d{10}$/,
      errorElement: document.getElementById("phonenoError"),
      emptyMsg: "Phone number cannot be empty",
      invalidMsg: "Phone number must be exactly 10 digits",
      validMsg: "Valid phone number",
    },
    higherEducation: {
      element: document.getElementById("higherEducation"),
      regex: /.+/,
      errorElement: document.getElementById("EducationError"),
      emptyMsg: "Education cannot be empty",
      invalidMsg: "Please select an education option",
      validMsg: "Valid selection",
    },
    country: {
      element: document.getElementById("country"),
      regex: /.+/,
      errorElement: document.getElementById("countryError"),
      emptyMsg: "Country cannot be empty",
      invalidMsg: "Please select a country",
      validMsg: "Valid selection",
    },
    description: {
      element: document.getElementById("description"),
      regex: /^.{1,150}$/,
      errorElement: document.getElementById("DescriptionError"),
      emptyMsg: "Description cannot be empty",
      invalidMsg: "Description must be between 1 and 150 characters",
      validMsg: "Valid description",
    },
    age: {
      element: document.getElementById("age"),
      regex: /^(1[89]|[2-9][0-9]|1[01][0-9]|120)$/,
      errorElement: document.getElementById("ageError"),
      emptyMsg: "Age cannot be empty",
      invalidMsg: "Age must be between 18 and 120",
      validMsg: "Valid age",
    },
  };

  let isFormValid = true;

  for (const [fieldName, field] of Object.entries(fields)) {
    const isFieldValid = validateField(
      field.element,
      field.element.value.trim(),
      field.regex,
      field.errorElement,
      field.emptyMsg,
      field.invalidMsg,
      field.validMsg
    );
    if (!isFieldValid) {
      isFormValid = false;
    }
  }

  if (isFormValid) {
    addToTable(fields);
    event.target.reset();
    document
      .querySelectorAll(".validation-icon")
      .forEach((icon) => icon.remove());
  }
}

function addToTable(fields) {
  const table = document.querySelector("table tbody");
  const newRow = document.createElement("tr");

  const rowData = [
    table.children.length + 1,
    fields.username.element.value,
    fields.email.element.value,
    "••••••••",
    fields.phoneno.element.value,
    fields.age.element.value,
    fields.country.element.value,
    fields.higherEducation.element.value,
    fields.description.element.value,
  ];

  rowData.forEach((value) => {
    const cell = document.createElement("td");
    cell.className = "px-4 py-2 border-b text-sm text-gray-700";
    cell.textContent = value;
    newRow.appendChild(cell);
  });

  table.appendChild(newRow);
}

const description = document.getElementById("description");
const charcount = document.getElementById("char-count");
const maxLength = 150;

description.addEventListener("input", function () {
  const inputLength = description.value.length;
  charcount.textContent = inputLength;

  if (inputLength >= maxLength) {
    description.className =
      description.className.replace(/border-red-500|border-green-500/g, "") +
      " border-red-500";
    description.style.color = "#ef4444";
  } else {
    description.className = description.className.replace(
      /border-red-500|border-green-500/g,
      ""
    );
    description.style.color = "";
  }
});
