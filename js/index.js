fetch('https://dummyjson.com/recipes?limit=10')
.then (function(response){
    return response.json();
})
.then(function(data) {
    console.log(data);
    let imagen = document.querySelector(".imagen")
    imagen.src = data.recipes[0].image
})
