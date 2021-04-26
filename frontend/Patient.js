const SERVER_URL = "http://localhost:5000";

var patientFname = document.getElementById("fname");
var patientLname = document.getElementById("lname");
var patientEmail = document.getElementById("email");
var patientPhone = document.getElementById("phone");
var patientAddress = document.getElementById("address");
var patientUsername = document.getElementById("username");
var patientPassword = document.getElementById("password");

var patientDropdown = document.getElementById("patients");

var updatePatientButton = document.getElementById("updatePatientButton");
var deletePatientButton = document.getElementById("deletePatientButton");

updatePatientButton.addEventListener("click", updatePatient);
deletePatientButton.addEventListener("click", deletePatient);

getPatients();

function getPatients() {
  fetch(`${SERVER_URL}/allPatients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        var option = document.createElement("OPTION");

        //Set Customer Name in Text part.
        option.innerHTML = data[i].fname + " " + data[i].lname;

        //Set CustomerId in Value part.
        option.value = data[i].id;

        //Add the Option element to DropDownList.
        patientDropdown.options.add(option);
      }
    });
}

function updatePatient() {
  data = {
    id: patientDropdown.value,
    fname: patientFname.value,
    lname: patientLname.value,
    email: patientEmail.value,
    phone: patientPhone.value,
    address: patientAddress.value,
    username: patientUsername.value,
    password: patientPassword.value,
    sex:"",
    DoB:"",
    medication:"",
    attachments:""
  };
  fetch(`${SERVER_URL}/updatePatient`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function deletePatient(){
    var id=patientDropdown.value
    fetch(`${SERVER_URL}/patients/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
}