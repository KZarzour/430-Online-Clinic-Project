const SERVER_URL = "http://localhost:5000";

var patientLoginButton = document.getElementById("patientSubmit");
var patientPassword = document.getElementById("patientPassword");
var patientUsername = document.getElementById("patientUsername");
patientLoginButton.addEventListener("click", verifyPatient);

var doctorLoginButton = document.getElementById("doctorSubmit");
var doctorPassword = document.getElementById("doctorPassword");
var doctorUsername = document.getElementById("doctorUsername");
doctorLoginButton.addEventListener("click", verifyDoctor);

function verifyPatient() {
  console.log("Verify Patient called");
  data = {
    username: patientUsername.value,
    password: patientPassword.value,
  };

  fetch(`${SERVER_URL}/checkPatient`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data != false) {
        console.log(data);
        localStorage.setItem("userId", JSON.stringify(data[0]));
        localStorage.setItem("name", JSON.stringify(data[1]));
        localStorage.setItem("username", JSON.stringify(patientUsername.value));
        window.location.replace(
          "./Client-Portal.html"
        );
      }
    });
}

function verifyDoctor() {
  console.log("Verify Doctor called");
  data = {
    username: doctorUsername.value,
    password: doctorPassword.value,
  };

  fetch(`${SERVER_URL}/checkDoctor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data != false) {
        console.log(data);
        localStorage.setItem("userId", JSON.stringify(data[0]));
        localStorage.setItem("name", JSON.stringify(data[1]));
        localStorage.setItem("username", JSON.stringify(patientUsername.value));
        window.location.replace(
          "./Doctor-Portal.html"
        );
      }
    });
}
