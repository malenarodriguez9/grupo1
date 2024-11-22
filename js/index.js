fetch('https://dummyjson.com/recipes?limit=10')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let recetas = document.querySelector(".recetas");
    let titulo = "";

    for (let i = 0; i < data.recipes.length; i++) {
        console.log(i);
        titulo += `<article class="imagenes">
        <img src="${data.recipes[i].image}" alt="">
        <a class="comida" href="./detalles.html?id=${data.recipes[i].id}">
        Comida: ${data.recipes[i].name}</a>
        <p class="dificultad">Dificultad: ${data.recipes[i].difficulty}</p>
        </article>`;
    }
    recetas.innerHTML += titulo;

})
.catch(function(error) {
    console.log("Error al obtener las recetas:", error);
});

let cargar = document.querySelector('.button_cargar');
let skip = 10

cargar.addEventListener('click', function() {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let recetas = document.querySelector(".recetas");
        let titulo = "";
    
        for (let i = 0; i < data.recipes.length; i++) {
            console.log(i);
            titulo += `<article class="imagenes">
            <img src="${data.recipes[i].image}" alt="">
            <a class="comida" href="./detalles.html?id=${data.recipes[i].id}">
            Comida: ${data.recipes[i].name}</a>
            <p class="dificultad">Dificultad: ${data.recipes[i].difficulty}</p>
            </article>`;
        }
        recetas.innerHTML += titulo;
    
    })
    .catch(function(error) {
        console.log("Error al obtener las recetas:", error);
    });

    skip = skip + 10
    
});


