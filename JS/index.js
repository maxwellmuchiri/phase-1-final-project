// FETCHING DATA FROM JSON SERVER
let url ="http://localhost:3000/vehicles";
let mboto = document.getElementById("mboto").addEventListener('click',(x)=>{console.log("yess")})
let price = document.getElementById("price").addEventListener('click',(x)=>{console.log("yess")})
let type = document.getElementById("make").addEventListener('click',(x)=>{console.log("yesss")})
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
        imageElement.style.width = '650px';
        imageElement.style.height = '450px';
        li.textContent = `${vehicle.make}
                          ${vehicle.color}
                          ${vehicle.price}`;
        const button = document.createElement("button");
        button.textContent = "Order";
        button.addEventListener("click", () => {
          button.textContent = "Ordered";
        });
        li.appendChild(button);
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

let field = document.querySelectorAll('#payment input[type="radio"]');
field.forEach((field) => {
  field.addEventListener('change', (event) => {
    const paymentMethod = event.target.value;
    console.log(`Payment method: ${paymentMethod}`);
  });
});