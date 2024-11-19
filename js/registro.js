let formulario = document.querySelector("form");
let campoEmail = document.querySelector("#email");
let campoPassword = document.querySelector("#password");
let errorEmail =document.querySelector(".email")
let errorPassword = document.querySelector(".password")
formulario.addEventListener("submit", function (evento) {
   evento.preventDefault();

   if (campoEmail.value == "") {
       console.log("Por favor complete el campo")
       errorEmail.innerHTML = "Por favor complete el campo"
      
   }else if (campoPassword.value == ""){
       console.log("Por favor complete el campo")
       errorPassword.innerHTML = "Por favor complete el campo"
   }else{
       formulario.submit()
   }


});
