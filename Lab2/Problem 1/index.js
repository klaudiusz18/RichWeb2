
var button = document.getElementById("button");
button.addEventListener("click", displayDetails);
var row = 1;

function displayDetails() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    if(!name || !number || !email) {
        alert("Please fill in all fields");
        return;
    }



    var display = document.getElementById("results");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = number;
    cell3.innerHTML = email;


    row++;

}
