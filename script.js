function getUser(){

document.getElementById("loading").innerHTML="Loading...";

fetch("https://randomuser.me/api/")

.then(response => response.json())

.then(data => {

document.getElementById("loading").innerHTML="";

const user = data.results[0];

document.getElementById("user").innerHTML = `
<img src="${user.picture.large}">
<h2>${user.name.first} ${user.name.last}</h2>
<p>${user.email}</p>
`;

})

.catch(error => {

document.getElementById("loading").innerHTML="Error Loading Data";

});

}