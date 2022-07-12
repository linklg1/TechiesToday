async function logout() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    alert('you have logged out');
    document.location.replace('/');
    
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout-link').addEventListener('click', logout);
