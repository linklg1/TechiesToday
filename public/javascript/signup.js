const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const password = document.querySelector("#password-signup");
  const email = document.querySelector("#email-signup")
console.log(username.value, password.value)
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
      email: email.value
    }),
    headers: { "Content-Type": "application/json" }
  })
if (response.ok){
      document.location.replace("/dashboard");}
   else {console.log("sign up failed")}
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);



