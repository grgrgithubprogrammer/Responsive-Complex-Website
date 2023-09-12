const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateForm()) {
    form.submit();
  }
});

const validateForm = () => {
  const fields = [
    {
      id: "#form-fname",
      para: "#form-para-fname",
      regex: /^[A-Za-z]+$/,
      errorMessage: "Invalid first name",
    },
    {
      id: "#form-sname",
      para: "#form-para-sname",
      regex: /^[A-Za-z]+$/,
      errorMessage: "Invalid second name",
    },
    {
      id: "#form-email",
      para: "#form-para-email",
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Invalid email",
    },
    {
      id: "#form-password",
      para: "#form-para-password",
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      errorMessage: "Invalid password",
    },
    {
      id: "#form-confirm-password",
      para: "#form-para-confpassword",
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      errorMessage: "Invalid password",
    },
  ];

  let isValid = true;

  fields.forEach((field) => {
    const input = document.querySelector(field.id);
    const para = document.querySelector(field.para);
    const value = input.value;

    if (!value.match(field.regex)) {
      para.textContent = field.errorMessage;
      isValid = false;
    } else {
      para.textContent = "";
    }
  });

  const passwordInput = document.querySelector("#form-password");
  const confirmPasswordInput = document.querySelector("#form-confirm-password");
  const passwordPara = document.querySelector("#form-para-password");
  const confirmPasswordPara = document.querySelector("#form-para-confpassword");

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordPara.textContent = "Passwords do not match";
    confirmPasswordPara.textContent = "Passwords do not match";
    isValid = false;
  }

  return isValid;
};
