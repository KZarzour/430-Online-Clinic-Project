const SERVER_URL = "http://127.0.0.1:5000";

var welcomeMessage = document.getElementById("doctorWelcome");
var appointmentList = document.querySelector("appointmentList");
welcomeMessage.innerHTML = "Welcome Dr." + JSON.parse(localStorage.getItem("name"));
checkAppointment.addEventListener("click", populateList);

function populateList() {
    data = {
        id: JSON.parse(localStorage.getItem("userId"))
    }
    fetch(`${SERVER_URL}/showDoctorAppointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          var list = document.createElement('ul');
          for(var i = 0; i < data.length; i++) {
              // Create the list item:
              var item = document.createElement('li');
      
              // Set its contents:
              item.appendChild(document.createTextNode(data[i].startDate));
      
              // Add it to the list:
              list.appendChild(item);
          }
          document.getElementById('appointmentList').appendChild(list);
        });

    
}