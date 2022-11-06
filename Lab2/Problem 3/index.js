//fetching the github api to get user's info
function button(user) {
    fetch("https://api.github.com/users"+user)
    .then(res => res.json())
    .then(data => DisplayGitUserInfo(data))
}

const form = document.querySelector("form");
form.onsubmit = (event) => {
    event.preventDefault();
    button(form.children[0].value);
}

function DisplayGitUserInfo(json) {
    let data = json
    console.log(info);
    document.getElementById("userimg").src = data.avatar_url;
    document.getElementById("name").innerHTML = "Name: "+data.name;
    document.getElementById("username").src = "Username: "+ data.login;
    document.getElementById("email").src = "Email: "+data.email;
    document.getElementById("location").src ="location: "+data.location;
    document.getElementById("gists").src = "Number of Gists: "+data.public_gists;
}

function GitRepos(repos_url) {
    fetch(repos_url)
    .then(res => res.json())
    .then(data => data.forEach(repo => addElement("name =" + repo.name + "\nDescription = "+ repo.description)));
}