// FETCHING DATA FROM JSON SERVER
let url ="http://localhost:3000/vehicles";
let mboto = document.getElementById("mboto").addEventListener('click',(x)=>{console.log("yess")})
let price = document.getElementById("price").addEventListener('click',(x)=>{console.log("yess")})
let type = document.getElementById("make").addEventListener('click',(x)=>{console.log("wtfff")})
let vehicles=document.querySelector(".vehicles");
let imageElement = document.createElement('img');
let mainpage=document.getElementsByClassName('mainpage');

function fetchVehicles() {
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let ul = document.createElement('ul');
      data.forEach(vehicle => {
        const li = document.createElement('li');
        const imageElement = document.createElement('img');
        imageElement.src = vehicle.photo;
        imageElement.style.width = '600px';
        imageElement.style.height = '400px';
        li.textContent = `${vehicle.make} ${vehicle.price}`;
        li.appendChild(imageElement);
        ul.appendChild(li);
      });
      document.querySelector('.vehicles').appendChild(ul);
    });
}

fetchVehicles();

let form = document.getElementById('ratingForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let rating = form.elements.rating.value;
  console.log(`You rated your service as ${rating} out of 5.`);
});

