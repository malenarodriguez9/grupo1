let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString);
let extraer = queryStringObjeto.get("busqueda");
let resultados = document.querySelector(".resultados_recetas");

fetch(`https://dummyjson.com/recipes/search?q=${extraer}`)
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);

        
        if (data.recipes.length === 0) {
            resultados.innerHTML = `<p class="sin-resultados">No hay resultados que coincidan con tu búsqueda.</p>`;
        } else {
            for (let i = 0; i < data.recipes.length; i++) {
                resultados.innerHTML += `<article class="imagenes2">
                    <img src="${data.recipes[i].image}" alt="">
                    <a class="comida" href="./detalles.html?id=${data.recipes[i].id}">
                    Comida: ${data.recipes[i].name}</a>
                    <p class="dificultad">Dificultad: ${data.recipes[i].difficulty}</p>
                </article>`;
            }
        }
    })
    .catch(function(error) {
        console.log("Error al cargar las categorías:", error); 
    });

