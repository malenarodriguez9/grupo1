let formulario = document.querySelector("form");
let campoEmail = document.querySelector("#email");
let campoPassword = document.querySelector("#password");




formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();




   if (campoEmail.value == "") {
      alert("Por favor complete el campo email");
    
  }




   if (campoPassword.value == "") {
      alert("Por favor complete el campo contraseña");
  }
});

