
console.log('we are logging in');

async function loginFormHandler(event) {
  event.preventDefault();

const username = document.querySelector("#email-login").value;
const password = document.querySelector("#password-login").value;

console.log('username'+ username);
console.log('pwd'+ password);

let handleError = function(err){
  console.warn(err);
  return new Response(JSON.stringify({
    code:400, 
    message: 'network error!'
  }));
};


if (username && password) {
  const response = await fetch('/api/user/login', {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password
    }),

    headers: { "Content-Type": "application/json" }
  }).catch(handleError);

  if (response.ok) {
    console.log(response);
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
  
}
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
