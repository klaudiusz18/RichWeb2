var form = document.getElementById("form-id");
form.addEventListener("click", diplayDetails);

var row = 1;

function diplayDetails() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    if(!name || !number || !email) {
        alert("Please fill in all boxes");
        return;
    }

}