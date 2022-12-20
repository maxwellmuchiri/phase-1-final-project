//FETCHING DATA FROM JSON SERVER
fetch(" http://localhost:3000/vehicles")
.then(res=>res.json())
.then(data=>{console.log(data)});


