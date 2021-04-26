const SERVER_URL = "http://localhost:5000";

var doctorFname = document.getElementById("fname");
var doctorLname = document.getElementById("lname");
var doctorPhoneExt = document.getElementById("phoneExt");
var doctorAddress = document.getElementById("address");
var doctorUsername = document.getElementById("username");
var doctorPassword = document.getElementById("password");
var doctorSpecialization = document.getElementById("specialization");

var doctorDropdown = document.getElementById("doctors");

var updateDoctorButton = document.getElementById("updateDoctorButton");
var deleteDoctorButton = document.getElementById("deleteDoctorButton");

updateDoctorButton.addEventListener("click", updateDoctor);
deleteDoctorButton.addEventListener("click", deleteDoctor);

getDoctors();

function getDoctors() {
  fetch(`${SERVER_URL}/allDoctors`, {
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
        doctorDropdown.options.add(option);
      }
    });
}

function updateDoctor() {
  console.log("Update doctor called");
  data = {
    id: doctorDropdown.value,
    fname: doctorFname.value,
    lname: doctorLname.value,
    specialization: doctorSpecialization.value,
    rate: "",
    email: "",
    phoneExt: doctorPhoneExt.value,
    address: doctorAddress.value,
    username: doctorUsername.value,
    password: doctorPassword.value,
  };
  fetch(`${SERVER_URL}/updateDoctor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function deleteDoctor(){
    var id=doctorDropdown.value
    fetch(`${SERVER_URL}/doctors/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
}