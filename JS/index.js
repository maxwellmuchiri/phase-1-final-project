//FETCHING DATA FROM JSON SERVER
let url =" http://localhost:3000/vehicles"

// function fetchVehicles(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(vehicles => {
//             vehicles.show.forEach(vehicle=> {
//                 displayVehicle(vehicle)
//             });
//         })

// }
// function displayVehicle(vehicle)
// {

//     const li = document.createElement('li')
//     li.style.cursor = "pointer"
//     li.textContent = (vehicle.type).toUpperCase()
//     listHolder.appendChild(li)
    
    
// }
const mboto = document.getElementById("mboto").addEventListener('click',(x)=>{console.log("wtfff")})
const price = document.getElementById("price").addEventListener('click',(x)=>{console.log("wtfff")})
const type = document.getElementById("make").addEventListener('click',(x)=>{console.log("wtfff")})

function fetchVehicles(){
    fetch(url)
    .then(resp=>resp.json()
    )
    .then(data=>{ if(data.type ="Car"){
        console.log(data.id)
    }});

    // if(data.type ="Car"){
    //     console.log(data.id)
    // }

}
fetchVehicles()

// fetch('https://example.com/data.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
