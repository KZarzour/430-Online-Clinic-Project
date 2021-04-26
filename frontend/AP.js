const SERVER_URL = "http://localhost:5000";

var patientReport = document.getElementById("patientReport");
var numberOfDays = document.getElementById("ndays");
var patientReportButton = document.getElementById("patientReportButton");
patientReportButton.addEventListener("click", getReport);
getPatients();

function getPatients() {
  console.log("Get patients called");
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
        patientReport.options.add(option);
      }
    });
}

function getReport() {
  data = { days: numberOfDays.value };
  
  console.log("Get Report Called");
  console.log(data);
  fetch(`${SERVER_URL}/showReport`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var list = document.createElement("ul");
      for (var i = 0; i < data.length; i++) {
        console.log(patientReport.value);
        if (data[i].Patient == patientReport.value) {
          console.log(data[i]);

          // Create the list item:
          var item = document.createElement("li");

          // Set its contents:
          content = data[i]["Status"] + " appointment " + data[i]["startDate"];
          item.appendChild(document.createTextNode(content));

          // Add it to the list:
          list.appendChild(item);
        }
      }
      document.getElementById("listOfActivities").appendChild(list);
    });
}

function PopUp() {
  document.getElementById("patientReportPopUp").style.display = "block";
}
function HidePopUp() {
  document.getElementById("patientReportPopUp").style.display = "none";
}
