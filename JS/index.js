//FETCHING DATA FROM JSON SERVER
let url =" http://localhost:3000/vehicles"
 
const mboto = document.getElementById("mboto").addEventListener('click',(x)=>{console.log("wtfff")})
const price = document.getElementById("price").addEventListener('click',(x)=>{console.log("wtfff")})
const type = document.getElementById("make").addEventListener('click',(x)=>{console.log("wtfff")})
const vehicles=document.querySelector(".vehicles");



// function fetchVehicles(){
//     fetch(url)
//     .then(resp=>resp.json()
//     )
//     .then(data=>{

//     const li = document.createElement('ul');
//     vehicles.appendChild(li)
//     data.forEach(vehicle => {
//       const item = document.createElement('div');
//       item.textContent = `${vehicle.make} ${vehicle.model} ${vehicle.photo}`;
//       // vehicles.innerHTML=`${vehicle.make} ${vehicle.model} (img src"${vehicle.photo}`
//       // mboto.src=vehicle.photo;
//       // price=vehicle.price;
//       // type=vehicle.


//       li.appendChild(item);
//     });
//     // add the list to the page
//     document.body.appendChild(li);
//   });

    
// }
// fetchVehicles()



fetch('url')
  .then(response => response.json())
  .then(data => {
    const vehicle = data.vehicle;

    // Create the elements
    const carDiv = document.createElement('div');
    const nameH1 = document.createElement('h1');
    const imageImg = document.createElement('img');
    const detailsUl = document.createElement('ul');
    // const manufacturerLi = document.createElement('li');
    // const modelLi = document.createElement('li');
    const color = document.createElement('li');

    // Populate the elements
    nameH1.textContent = vehicle.type;
    imageImg.src = vehicle.photo;
    // manufacturerLi.textContent = `Manufacturer: ${car.manufacturer}`;
    // modelLi.textContent = `Model: ${vehicles.model}`;
    color.textContent = `Year: ${vehicle.color}`;

    // Assemble the elements
    // detailsUl.appendChild(manufacturerLi);
    // detailsUl.appendChild(modelLi);
    detailsUl.appendChild(color);
    carDiv.appendChild(nameH1);
    carDiv.appendChild(imageImg);
    carDiv.appendChild(detailsUl);

    // Add the car information to the DOM
    vehicles.appendChild(carDiv);
  });


