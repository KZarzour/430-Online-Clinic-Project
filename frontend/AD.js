const SERVER_URL = "http://localhost:5000";

var updateDoctorButton = document.getElementById("updateDoctorButton");

var deleteDoctorButton = document.getElementById("deleteDoctorButton");

var patientID= document.getElementById("doctorID");

updateDoctorButton.addEventListener("click", updateDoctorButton);

deleteDoctorButton.addEventListener("click", deleteDoctorButton);


function deleteDoctor(){
	console.log("Delete Doctor");
  data = {
    id: doctorID.value,
  };

  fetch(`${SERVER_URL}/deleteDoctor`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

