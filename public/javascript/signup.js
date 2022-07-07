const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const password = document.querySelector("#password-signup");
  const email=document.querySelector("#email-signup")

  fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
      email: email.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);



