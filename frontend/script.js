const SERVER_URL = "http://localhost:5000";

var adminLoginButton = document.getElementById("AdminSubmit");
var adminPassword = document.getElementById("adminPassword");
var adminUsername = document.getElementById("adminUsername");
adminLoginButton.addEventListener("click", verifyAdmin);

function verifyAdmin() {
  console.log("Verify Admin called");
  data = {
    username: adminUsername.value,
    password: adminPassword.value,
  };

  fetch(`${SERVER_URL}/checkAdmin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data === true) {
        window.location.replace(
          "./Admin-Portal.html"
        );
      }
    });
}
