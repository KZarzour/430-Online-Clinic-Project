const SERVER_URL = "http://localhost:5000";

var userFirstName = document.getElementById("name-6797");
var userLastName = document.getElementById("name-43b1");
var userGender = document.getElementById("select-3cae");
var userEmail = document.getElementById("email-6797");
var userDoB = document.getElementById("date-4895");
var userPhone = document.getElementById("phone-979a");
var userAddress = document.getElementById("message-6797");
var userPassword = document.getElementById("text-d4f4");

var RegisterUserButton = document.getElementById("RegisterUserButton");
RegisterUserButton.addEventListener("click", addUser);

function addUser() {
  console.log("Add User Called");

  if (document.getElementById("PatientRadioButton").checked == true) {
    data = {
      fname: userFirstName.value,
      lname: userLastName.value,
      sex: userGender.value,
      DoB: userDoB.value,
      medication: "",
      attachments: "",
      email: userEmail.value,
      phone: userPhone.value,
      address: userAddress.value,
      username: userEmail.value,
      password: userPassword.value,
    };

    fetch(`${SERVER_URL}/patients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
  } else {
    data = {
      fname: userFirstName.value,
      lname: userLastName.value,
      specialization: "",
      rate: 45,
      email: userEmail.value,
      phoneExt: userPhone.value,
      address: userAddress.value,
      username: userEmail.value,
      password: userPassword.value,
    };
    fetch(`${SERVER_URL}/doctors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  }
}
