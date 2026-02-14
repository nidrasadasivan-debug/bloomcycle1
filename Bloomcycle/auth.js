// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if(storedUser && storedUser.email === email && storedUser.password === password){
      alert("Login successful!");
      window.location.href = "dashboard.html";
  } else {
      alert("Invalid email or password");
  }
});


// SHOW / HIDE PASSWORD
function togglePassword(){
  const passwordInput = document.getElementById("loginPassword");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
