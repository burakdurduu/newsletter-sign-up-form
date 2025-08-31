const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const signupSection = document.querySelector(".signup");
const successSection = document.querySelector(".success");
const emailInput = document.getElementById("email");
const errorLabel = document.getElementById("error-msg");

function checkEmail(email) {
  if (!email || !email.trim()) {
    return false;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

function resetEmailStyles() {
  errorLabel.textContent = "";
  emailInput.classList.remove("email-error");
  emailInput.classList.add("email-normal");
}

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const isValid = checkEmail(email);

  if (isValid) {
    signupSection.classList.add("hidden");
    successSection.classList.remove("hidden");

    const userEmail = document.getElementById("user-email");
    userEmail.textContent = email;
  } else {
    errorLabel.textContent = "Valid email required";
    emailInput.classList.add("email-error");
    emailInput.classList.remove("email-normal");
  }
});

dismissBtn.addEventListener("click", () => {
  resetEmailStyles();
  signupSection.classList.remove("hidden");
  successSection.classList.add("hidden");
});

emailInput.addEventListener("input", () => {
  if (errorLabel.textContent) {
    resetEmailStyles();
  }
});
