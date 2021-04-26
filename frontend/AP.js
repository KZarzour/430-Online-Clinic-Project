const SERVER_URL = "http://localhost:5000";

var updatePatientButton = document.getElementById("updatePatientButton");

var deletePatientButton = document.getElementById("deletePatientButton");

var patientID= document.getElementById("patientID");


updatePatientButton.addEventListener("click", updatePatientButton);

deletePatientButton.addEventListener("click", deletePatientButton);


function deletePatient(){
	console.log("Delete Patient");
  data = {
    id: patientID.value,
  };

  fetch(`${SERVER_URL}/deletePatient`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

