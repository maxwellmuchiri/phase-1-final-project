//FETCHING DATA FROM JSON SERVER
let url =" http://localhost:3000/vehicles"

function fetchVehicles(url) {
    fetch(url)
        .then(response => response.json())
        .then(vehicles => {
            vehicles.show.forEach(vehicle=> {
                displayVehicle(vehicle)
            });
        })

}
function displayVehicle(vehicle)