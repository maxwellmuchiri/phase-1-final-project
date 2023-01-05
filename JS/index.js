// FETCHING DATA FROM JSON SERVER
let url ="http://localhost:3000/vehicles";
const mboto = document.getElementById("mboto").addEventListener('click',(x)=>{console.log("yess")})
const price = document.getElementById("price").addEventListener('click',(x)=>{console.log("yess")})
const type = document.getElementById("make").addEventListener('click',(x)=>{console.log("wtfff")})
const vehicles=document.querySelector(".vehicles");
const imageElement = document.createElement('img');

function fetchVehicles(){
    fetch(url)
    .then(resp=>resp.json()
    )
    .then(data=>{

    const li = document.createElement('ul');
    data.forEach(vehicle => {
      const item = document.createElement('li');
      item.textContent = `${vehicle.make} ${vehicle.price} ${vehicle.photo}`;
      li.appendChild(item);
      imageElement.src = data.imageUrl;
      document.body.appendChild(imageElement);
    });
    document.body.appendChild(li);
  });
}
fetchVehicles()
