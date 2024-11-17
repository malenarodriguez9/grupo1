fetch('https://dummyjson.com/recipes')
.then (function(response){
    return response.json();
})
.then(
    function(data){
    console.log(data);
    let recetas = document.querySelector(".recetas")
    let titulo = ""

    for (let i=0; i<10; i++) {
        console.log(i)
        titulo += `<article class="imagenes">
        <img src=${data.recipes[i].image} alt = "">
        <a class="comida" href="./index.html?id=${dara.recipes[i].id}">
        Comida:${data.recipes[i].name}</a>
        <p class="dificultad" >Dificultad: ${data.reipes[i].difficulty}</p>
        </article>`;
    }
    recetas.innerHTML=titulo

    let cargar = document.querySelector('.button_cargar')
    cargar.addEventListener('click', function(){
        for(let i=10;i<20;i++){
            titulo += `<article class="imagenes">
            <img src=${data.recipes[i].image} alt = ""><div>
            <a class="comida" href="./index.html?id=${data.recipes[i].id}"
            Comida: ${data.recipes[i].name}</a>
            <p class="dificultad" >Dificultad: ${data.recipes[i].difficulty}</p></div>
            </article>`;
            recetas.innerHTML=titulo
        }
    })
}
)
.catch(function(error)
{
    console.log(error)
})

fetch('https://dummyjson.com/recipes/search?q=Margherita')
.then(res => res.json())
.then(function(buscar){
    console.log(buscar);
    let buscador = document.querySelector(`.button_cargar`)
    buscador = `<a>./detalles.html</a>`
});