//FETCHING DATA FROM JSON SERVER
let url =" http://localhost:3000/vehicles"
 
const mboto = document.getElementById("mboto").addEventListener('click',(x)=>{console.log("wtfff")})
const price = document.getElementById("price").addEventListener('click',(x)=>{console.log("wtfff")})
const type = document.getElementById("make").addEventListener('click',(x)=>{console.log("wtfff")})
const vehicles=document.querySelector(".vehicles");

function fetchVehicles(){
    fetch(url)
    .then(resp=>resp.json()
    )
    .then(data=>{

    const li = document.createElement('ul');
    data.forEach(vehicle => {
      const item = document.createElement('li');
      item.textContent = `${vehicle.make} ${vehicle.model} (img src"${vehicle.link}")`;
      li.appendChild(item);
    });
    // add the list to the page
    document.body.appendChild(li);
  });

    
}
fetchVehicles()
