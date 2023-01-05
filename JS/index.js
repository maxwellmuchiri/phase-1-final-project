//FETCHING DATA FROM JSON SERVER
let url =" http://localhost:3000/vehicles"; 
const mboto = document.getElementById("mboto").addEventListener('click',(x)=>{console.log("yess")})
const price = document.getElementById("price").addEventListener('click',(x)=>{console.log("yess")})
const type = document.getElementById("make").addEventListener('click',(x)=>{console.log("yess")})
const vehicles=document.querySelector(".vehicles");
const burron = document.getElementById('service rating').addEventListener('click',(x)=>{console.log('1')});


function fetchVehicles(){
    fetch(url)
    .then(resp=>resp.json()
    )
    .then(data=>{

    const li = document.createElement('ul');
    vehicles.appendChild(li)
    data.forEach(vehicles => {
      const item = document.createElement('div');
      item.textContent = `${vehicles.make} ${vehicles.price} ${vehicles.photo}`;

      vehicles.innerHTML=`${vehicles.make} ${vehicles.price} (img src"${vehicles.photo}`
      mboto.src=vehicles.photo;
      price=vehicles.price;
      make=vehicles.make;


      li.appendChild(item);
      li.appendChild(mboto)
    });
    document.body.appendChild(li);
  })
};
 fetchVehicles()

