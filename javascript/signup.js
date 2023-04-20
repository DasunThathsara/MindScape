//Signup
let updatedUsername = '';
let updatedPwd = '';

const signupForm = document.getElementById('signupform');
const signupErrorContainer = document.getElementById('signupErrorContainer');
const signupErrorLink = 'https://dasunthathsara.github.io/MindScape/signup.html';
signupForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form fields
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;
  const contactno = document.getElementById('phoneNo').value;
  //const birthdate = document.getElementById('birthdate').value;
  //const gender = document.querySelector('input[name="gender"]:checked');
  const password = document.getElementById('pwd').value;

  // Check if any field is empty
  let errorMessage = '';
  if (!name.trim()) {
    errorMessage += 'Name is required';
  }
  else if (!email.trim()) {
    errorMessage += 'Email is required';
  }
  else if (!contactno.trim()) {
    errorMessage += 'Contact number is required';
  }
  // else if (country=="") {
  //   errorMessage += 'Select country';
  // }
  // else if (!birthdate) {
  //   errorMessage += 'Select birthday';
  // }
  // else if (gender == null) {
  //   errorMessage += 'Choose gender';
  // }
  else if (!password.trim()) {
    errorMessage += 'Password is required';
  }

  console.log(errorMessage);

  // If any field is empty, show the error message and send it to the error link
  if (errorMessage) {
    signupErrorContainer.textContent = errorMessage;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', signupErrorLink);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(errorMessage);
  } else {
    signupErrorContainer.textContent = 'Signup Successful!!';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', signupErrorLink);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(errorMessage);
    updateVariable(password,name);
  }
  signupForm.reset();
});

function updateVariable(updatedPwd, updatedUsername) {
  localStorage.setItem('updatedUsername', updatedUsername);
  localStorage.setItem('updatedPassword', updatedPwd);
  const inputEmail = document.getElementById('email');
  const inputPwd = document.getElementById('password');
  inputEmail.value = updatedUsername;
  inputPwd.value = updatedPwd;
}