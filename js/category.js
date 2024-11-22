let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString);
let extraer = queryStringObjeto.get("category")

let categoriaNombre = document.querySelector("#categoria-nombre");
let recetasLista = document.querySelector(".recetas-lista");
categoriaNombre.innerHTML = extraer;

fetch(`https://dummyjson.com/recipes/tag/${extraer}`)
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);
        
        for (let i = 0; i < data.recipes.length; i++) {
            let receta = data.recipes[i];
            recetasLista.innerHTML += `
                <article class="receta-item">
                    <img src="${receta.image}" alt="${receta.name}" class="receta-imagen">
                    <h3 class="receta-titulo">${receta.name}</h3>
                    <p><b>Nivel de dificultad:</b> ${receta.difficulty}</p>
                    <a href="./detalles.html?id=${receta.id}" class="ver-detalle">Ver detalle</a>
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.error("Error al cargar las recetas:", error);
        recetasLista.innerHTML = "<p>No se pudieron cargar las recetas. Intente nuevamente.</p>";
    });
        
