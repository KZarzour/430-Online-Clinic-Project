const SERVER_URL = "http://127.0.0.1:5000";

var appointmentButton = document.getElementById("appointmentSubmit");
var doctorsDropdown = document.getElementById("doctorsDropdown");
var month1 = document.getElementById("month1");
var day1 = document.getElementById("day1");
var year1 = document.getElementById("year1");
var time = document.getElementById("time");
var welcomeMessage = document.getElementById("welcomeMessage");
welcomeMessage.innerHTML =
  "Welcome " + JSON.parse(localStorage.getItem("name"));

appointmentButton.addEventListener("click", addAppointment);

console.log(JSON.parse(localStorage.getItem("userId")));
console.log(JSON.parse(localStorage.getItem("username")));

var doctorsDropdown = document.getElementById("doctorsDropdown");
getDoctors();

var availableAppointments = document.getElementById("appointmentsAv");

var checkAppointmentButton = document.getElementById("checkAppointmentButton");
checkAppointmentButton.addEventListener("click", doctorAvailability);

var checkDay = document.getElementById("day");
var checkYear = document.getElementById("year");
var checkMonth = document.getElementById("month");

var appointmentDropdown = document.getElementById("appointment");
var newYear = document.getElementById("newYear");
var newMonth = document.getElementById("newMonth");
var newDay = document.getElementById("newDay");
var newHour = document.getElementById("newHour");
var updateAppointmentButton = document.getElementById("updateAppointmentButton");
var deleteAppointmentButton = document.getElementById("deleteAppointmentButton");
updateAppointmentButton.addEventListener("click", updateAppointment);
deleteAppointmentButton.addEventListener("click", deleteAppointment);

var availableAppointment = document.getElementById("availableAppointment");

function doctorAvailability() {
  var date = checkYear.value + "-" + checkMonth.value + "-" + checkDay.value;
  data = {
    drID: doctorsDropdown.value,
    time: date,
  };

  fetch(`${SERVER_URL}/specificAppointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      var list = document.createElement('ul');
      for (var i = 0; i < data.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(data[i]));

        // Add it to the list:
        list.appendChild(item);
      }
      document.getElementById('appointmentsAv').appendChild(list);
    });
}

getAppoint();

function deleteAppointment() {
  var id = appointmentDropdown.value
  fetch(`${SERVER_URL}/appointments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function updateAppointment() {
  console.log("Update an Appointment");

  var date1 = newYear.value + "-" + newMonth.value + "-" + newDay.value + " " + newHour.value;
  console.log(date1)
  data = {
    id: appointmentDropdown.value,
    startDate: date1
  };

  console.log(data);
  fetch(`${SERVER_URL}/updateAppointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}


function getAppoint() {
  data = {
    id: JSON.parse(localStorage.getItem("userId")),
  }

  fetch(`${SERVER_URL}/showPatientAppointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var option = document.createElement("OPTION");

        //Set Customer Name in Text part.
        option.innerHTML = data[i].startDate;

        //Set CustomerId in Value part.
        option.value = data[i].id;

        //Add the Option element to DropDownList.
        appointmentDropdown.options.add(option);
      }
    });
}



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
        option.innerHTML = data[i].lname;

        //Set CustomerId in Value part.
        option.value = data[i].id;

        //Add the Option element to DropDownList.
        doctorsDropdown.options.add(option);
      }
    });
}

function addAppointment() {
  console.log("Make an Appointment");
  var date1 =
    year1.value + "-" + month1.value + "-" + day1.value + " " + time.value;

  data = {
    doctor: doctorsDropdown.value,
    patient: JSON.parse(localStorage.getItem("userId")),
    paymentID: 1,
    startDate: date1,
  };

  console.log(data);
  fetch(`${SERVER_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay2").style.display = "block";
}
function formOn() {
  document.getElementById("appointmentsAv").style.display = "inline-block";
  document.getElementById("form1").style.display = "inline-block";
  document.getElementById("dropdown").style.display = "inline-block";
  document.getElementById("doctorsDropdown").style.display = "block";
}
function formCancel() {
  document.getElementById("formID").style.display = "inline-block";
}
function formUpdate() {
  document.getElementById("formID2").style.display = "inline-block";
}
function off() {
  document.getElementById("appointmentsAv").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("form1").style.display = "none";
  document.getElementById("dropdown").style.display = "none";
  document.getElementById("formID").style.display = "none";
  document.getElementById("formID2").style.display = "none";
}
function send1() {
  document.getElementById("dropdown").submit();
}
function send2() {
  document.getElementById("form1").submit();
}
