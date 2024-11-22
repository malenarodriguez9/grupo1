
fetch("https://dummyjson.com/recipes/tags")
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data); 

        let contenedor = document.querySelector(".Cat");
        let categorias = "";

        for (let i = 0; i < data.length; i++) {
            categorias += `
                <article class="Cat1">
                    <a href="./category.html?category=${data[i]}" class="categoria_link">${data[i]}</a>
                </article>`;
        }

        contenedor.innerHTML = categorias;
    })
    .catch(function(error) {
        console.log("Error al cargar las categorías:", error); 
    });

