function button(user) {  
    fetch("https://api.github.com/users/"+user)
    .then(res => res.json())//response type
    .then(data => DisplayGitUserInfo(data))
}

const form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault();
    button(form.children[0].value);

}

function DisplayGitUserInfo(json) {
    let data = json
    console.log(data);
    document.getElementById("userimg").src = data.avatar_url;
    document.getElementById("name").innerHTML = "Name: "+data.name;
    document.getElementById("username").innerHTML = "Username: "+ data.login;
    document.getElementById("email").innerHTML = "Email: "+data.email;
    document.getElementById("location").innerHTML ="location: "+data.location;
    document.getElementById("gists").innerHTML = "Number of Gists: "+data.public_gists;

   
    removeElementsByClass("repository")
    GitRepos(data.repos_url)
}

//function to fetch repo name and repo description
function GitRepos(repos_url) {
    fetch(repos_url)
    .then(res => res.json())
    .then(data => data.forEach(repo => addElement("name =" + repo.name + "\nDescription = "+ repo.description)));
}

function addElement (text) {
    const newDiv = document.createElement("div", id="repository");
    newDiv.setAttribute("class","repository")
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("userrepos");
    currentDiv.insertBefore(newDiv, currentDiv.childNodes[1]);
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


