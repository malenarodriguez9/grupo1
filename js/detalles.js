
let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString);
let extraer = queryStringObjeto.get("id")
console.log(extraer)
let detalles_article= document.querySelector(".detalles_article")


    fetch(`https://dummyjson.com/recipes/${extraer}`)
        .then(function(response){
            return response.json();
        })
        
        .then(function(data){
            console.log(data);
            detalles_article.innerHTML += `<section class="section_detalles">
            <div class= "titulo_detalle"> 
                <h2>${data.name}</h2>
                </div>
                <img src= "${data.image}" alt = "" class = "imagen_detalle"> 
                <article class= "tittle_detalle"> 
                <p><b>Tiempo de preparacion: </b>${data.prepTimeMinutes} minutos </p>
                <p><b>Tiempo de coccion: </b>${data.cookTimeMinutes} minutos </p>
                <a class = "malena" href= "./categorias.html"> <b> Categorias: </b> ${data.tags} </a>
                </article>
                
                <p><b> Intrucciones: </b></p><p>${data.instructions}</p>`
        })
        
        .catch(function(error){
            console.error(error);
            document.body.innerHTML = '<h1>No se pudo cargar la receta. Intente nuevamente.</h1>';
        })

