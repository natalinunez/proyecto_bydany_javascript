//este bloque de codigo es para establecer en el localStorage el valor de la categoria (1,2,3)
//que se seleccione en la pagina principal
function fCategoriaAretes() {  
  localStorage.setItem("lscategoria", 1);
}

function fcategoriaCollares() {
  localStorage.setItem("lscategoria", 2);
}

function fcategoriaPulseras() {
  localStorage.setItem("lscategoria", 3);
}

//desafio complementario: animaciones con jquery
$("#contenedorMensaje_1")
  .mouseenter(function () {
    $("#eventoMensaje_1")
      .fadeIn("slow")
      // .slideDown("fast")        
    $(".imagenCate_1").css("opacity", "0.6");
});

$("#contenedorMensaje_1")
  .mouseleave(function () {
    $("#eventoMensaje_1") 
      // .hide()            
      .fadeOut("slow")
    $(".imagenCate_1").css("opacity", "1");
});

$("#contenedorMensaje_2")
  .mouseenter(function () {
    $("#eventoMensaje_2")
      .fadeIn("slow")
      // .slideDown("fast")
    $(".imagenCate_2").css("opacity", "0.6");
});

$("#contenedorMensaje_2")
  .mouseleave(function () {
    $("#eventoMensaje_2") 
      // .hide()            
      .fadeOut("slow")
    $(".imagenCate_2").css("opacity", "1");
});

$("#contenedorMensaje_3")
  .mouseenter(function () {
    $("#eventoMensaje_3")
      .fadeIn("slow")        
      // .slideDown("fast")
    $(".imagenCate_3").css("opacity", "0.6");
});

$("#contenedorMensaje_3")
  .mouseleave(function () {
    $("#eventoMensaje_3") 
      .fadeOut("slow")
      // .hide()            
    $(".imagenCate_3").css("opacity", "1");
});

$("#eventoMensaje_1").hide();
$("#eventoMensaje_2").hide();
$("#eventoMensaje_3").hide();

//Para mostrar cantidad de productos en el carrito e ir al carrito
function obtenerStorage(clave) {
    const valor = JSON.parse(localStorage.getItem(clave));
    console.log(`obtenerStorage - paso x 1 -index ${valor}`);
    return valor;
}

let idLogoCarrito = document.getElementById("idLogoCarrito");
idLogoCarrito.addEventListener("click", mostrarCarrito);

function mostrarCarrito () {
  if(obtenerStorage('carrito').length > 0) {         
      console.log("paso por carrito 1");
      window.location.href = "../vistas/carritoPrincipal.html";
      
  } else {
      console.log("paso por carrito 2");
      alert('No hay productos en el carrito');
  }
}

let idStyleBubbleCart = document.getElementById("idStyleBubbleCart");
idStyleBubbleCart.innerText = obtenerStorage('carrito').length;


//Para envío de formulario para
let idBotonFormulario = document.getElementById("idBotonFormulario");

let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputCorreo = document.getElementById("inputCorreo");
let inputTelefono = document.getElementById("inputTelefono");
let inputComentario = document.getElementById("inputComentario");

idBotonFormulario.addEventListener("click", validarFormulario);

function validarFormulario () {
  let vInputNombre = inputNombre.value;
  let vInputApellido = inputApellido.value;
  let vInputCorreo = inputCorreo.value;
  let vInputTelefono = inputTelefono.value;
  let vInputComentario = inputComentario.value;
    
  if(vInputNombre.length > 0 && vInputApellido.length > 0 &&  vInputCorreo.length > 0 && vInputTelefono.length > 0 && vInputComentario.length > 0) {
    alert("Sus datos fueron enviados exitosamente");
  } else {    
    alert("Falta ingresar uno de los datos")
  }  
}

