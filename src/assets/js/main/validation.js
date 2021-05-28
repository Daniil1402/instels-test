const callPopup = document.querySelector(".call-popup");
const checkbox = callPopup.querySelector("#checkbox");
const submitBtn = callPopup.querySelector("#submit");
const nameInput = callPopup.querySelector("#input-name");
const phoneInput = callPopup.querySelector("#input-tel");

//phone validation
function validatePhone(phone){
  const regex = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return regex.test(phone);
 }

phoneInput.addEventListener("focus", function () {
  if (!phoneInput.value) {
    phoneInput.value = "+7"
  }
});

let relevantValue = false;

phoneInput.addEventListener("keyup", function () {
  if (!validatePhone(phoneInput.value)){
    //console.log('Не соответствует');
    phoneInput.style = "border-color: red"
    relevantValue = false;
    disabledButton();
  }else{
    //console.log('Соответствует');
    phoneInput.style = "border-color: green"
    relevantValue = true;
    if (checkbox.checked) {
      activeButton();
    }
  }
});

phoneInput.addEventListener("blur", function () {
  if(phoneInput.value == "+7" || !phoneInput.value) {
    phoneInput.style = "border-color: none";
    phoneInput.value = "";
  }
});

//name validation
nameInput.addEventListener("keyup", function () {
  if (nameInput.value.length < 2) {
    nameInput.style = "border-color: red"
  }else {
    nameInput.style = "border-color: green"
  }
})
nameInput.addEventListener("blur", function () {
  if(!nameInput.value) {
    nameInput.style = "border-color: none"
  }
});

//disabled button submit changer
checkbox.addEventListener("change", function () {
  if (submitBtn.hasAttribute('disabled') && relevantValue) {
    activeButton();
  } else {
    disabledButton();
  }
});

const activeButton = function () {
  submitBtn.removeAttribute('disabled');
};

const disabledButton = function () {
  submitBtn.setAttribute('disabled', 'disabled');
};

