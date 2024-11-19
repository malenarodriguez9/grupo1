fetch('https://dummyjson.com/recipes')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let recetas = document.querySelector(".recetas");
    let titulo = "";

    for (let i = 0; i < 10; i++) {
        console.log(i);
        titulo += `<article class="imagenes">
        <img src="${data.recipes[i].image}" alt="">
        <a class="comida" href="./index.html?id=${data.recipes[i].id}">
        Comida: ${data.recipes[i].name}</a>
        <p class="dificultad">Dificultad: ${data.recipes[i].difficulty}</p>
        </article>`;
    }
    recetas.innerHTML = titulo;

    let cargar = document.querySelector('.button_cargar');
    cargar.addEventListener('click', function() {
        for (let i = 10; i < 20; i++) {
            titulo += `<article class="imagenes">
            <img src="${data.recipes[i].image}" alt="">
            <a class="comida" href="./index.html?id=${data.recipes[i].id}">
            Comida: ${data.recipes[i].name}</a>
            <p class="dificultad">Dificultad: ${data.recipes[i].difficulty}</p>
            </article>`;
        }
        recetas.innerHTML = titulo;
    });
})
.catch(function(error) {
    console.log("Error al obtener las recetas:", error);
});

fetch('https://dummyjson.com/recipes/search?q=Margherita')
.then(function(res) {
    return res.json();
})
.then(function(buscar) {
    console.log(buscar);
    let buscador = document.querySelector('.buscador');
    buscador.innerHTML = `<a href="./detalles.html?id=${buscar.recipes[0].id}">Ver detalles de Margherita</a>`;
})
.catch(function(error) {
    console.log("Error al buscar Margherita:", error);
});

