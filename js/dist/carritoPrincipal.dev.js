"use strict";

function fCategoriaAretes() {
  // let valor = categoriaAretes.innerText.toLowerCase()
  localStorage.setItem("lscategoria", 1);
}

function fcategoriaCollares() {
  localStorage.setItem("lscategoria", 2);
}

function fcategoriaPulseras() {
  localStorage.setItem("lscategoria", 3);
} //forma corta par el método ready


$(function () {
  var carrito = []; //obtenemos el localStorage

  function obtenerStorage(clave) {
    var valor = JSON.parse(localStorage.getItem(clave));
    console.log("obtenerStorage - paso x 1 ".concat(valor));
    return valor;
  } //para actualizar el localStorage


  function guardarStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
  }

  if (obtenerStorage('carrito')) {
    carrito = obtenerStorage('carrito');
  } else {
    alert('No hay nada en el carrito');
  } //cargamo el carrito en HTML


  function renderCarrito() {
    console.log("renderCarrito: ".concat(carrito.length));
    var i = 0; //limpiamos el tbody para que no se acumule lo anaterior al realizar la recarga

    $(".tbody").empty();
    carrito.map(function (item) {
      i++;
      $(".tbody").append("      \n            <tr class=\"ItemCarrito\">\n              <td scope=\"row\">".concat(i, "</td>\n              <td class=\"table__productos\">                \n                <h6 class=\"title\">").concat(item.nombre, "</h6>\n              </td>\n              <td class=\"table__price\">\n                <p>").concat(item.precio, "</p>\n              </td>\n              <td class=\"\">                                                               \n                <button id=\"btnMinus").concat(item.id, "\" class=\"btn botonCantiCarrito \">-</button>\n                  <span>").concat(item.cantidad, "</span>\n                <button id=\"btnPlus").concat(item.id, "\" class=\"btn botonCantiCarrito \">+</button>\n              </td>             \n              <td class=\"precioxcantidad \">\n                <p class=\"colorAzul \">").concat(item.precioxcantidad, "</p>\n              </td>\n              <td>\n                <button type=\"button\" class=\"delete btn btn-danger botonEliminar\">X</button>    \n              </td>\n            </tr>\n      "));
      $(".delete").on("click", function (e) {
        removeItemCarrito(e);
      });
      $("#btnPlus" + item.id).on("click", function (e) {
        item.cantidad = item.cantidad + 1;
        CarritoTotal();
      });
      $("#btnMinus" + item.id).on("click", function (e) {
        if (item.cantidad >= 1) {
          if (item.cantidad > 1) {
            item.cantidad = item.cantidad - 1;
          }

          CarritoTotal();
        }
      });
    });
  } //Sumatoria total de todo el carrito


  function CarritoTotal() {
    var Total = 0;
    var itemCartTotal = document.querySelector('.itemCartTotal');
    var itemCartTotalModal = document.querySelector('.itemCartTotalModal');
    carrito.forEach(function (item) {
      var precio = item.precio;
      item.precioxcantidad = item.precio * item.cantidad;
      Total = Total + precio * item.cantidad;
      console.log("Total=".concat(Total));
    });
    itemCartTotal.innerHTML = "Total $ ".concat(Total);
    itemCartTotalModal.innerHTML = "Total $ ".concat(Total);
    $(itemCartTotal).append;
    guardarStorage('carrito', carrito);
    renderCarrito();
  }

  renderCarrito();
  CarritoTotal(); //eliminar un registro del carrito

  function removeItemCarrito(e) {
    var buttonDelete = e.target;
    var tr = buttonDelete.closest(".ItemCarrito");
    var title = tr.querySelector('.title').textContent;
    console.log("len=".concat(carrito.length));

    for (var i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre.trim() === title.trim()) {
        carrito.splice(i, 1);
        break;
      }
    }

    tr.remove();
    guardarStorage('carrito', carrito);
    CarritoTotal();
    renderCarrito();
  } //Ini logica para mostrar compra exitosa en modal
  //cargamo el carrito en modal HTML


  function renderCarritoModal() {
    // console.log(`renderCarrito: ${carrito.length}`);
    var i = 0; //limpiamos el tbody para que no se acumule lo anaterior al realizar la recarga

    $(".tbodyModal").empty();
    carrito.map(function (item) {
      i++;
      $(".tbodyModal").append("      \n            <tr class=\"ItemCarrito\">\n              <td scope=\"row\">".concat(i, "</td>\n              <td class=\"table__productos\">                \n                <h6 class=\"title\">").concat(item.nombre, "</h6>\n              </td>\n              <td class=\"table__price\" >\n                <p class=\"colorRojo text-center\" >").concat(item.precio, "</p>\n              </td>\n              <td class=\"colorVerde text-center\" >                                                                               \n                <span class=\"colorRojo\">").concat(item.cantidad, "</span>                \n              </td>             \n              <td class=\"precioxcantidad \">\n                <p class=\"colorAzul text-center\">").concat(item.precioxcantidad, "</p>\n              </td>\n              <td>\n            </tr>\n      "));
    });
  }

  var idbuttonModal = document.getElementById("idbuttonModal");
  idbuttonModal.addEventListener("click", function () {
    console.log("lenModal=".concat(carrito.length));

    if (+carrito.length === 0) {
      // alert("No existen registros en el carrito para realizar la compra");
      console.log("lenModal_1=".concat(carrito.length)); // staticBackdrop.removeAttribute("id","")
      // const modalClass = document.getElementsByClassName("modalClass");

      var staticBackdrop = document.getElementById("staticBackdrop");
      staticBackdrop.id = "valor";
    } else {
      console.log("lenModal_2=".concat(carrito.length));
      renderCarritoModal();
    }
  }); //Para vaciar el carrito

  var idbuttonClose = document.getElementById("idbuttonClose");
  idbuttonClose.addEventListener("click", function () {
    console.log("len=".concat(carrito.length)); // carrito.pop();    

    carrito = [];
    guardarStorage('carrito', carrito);
    CarritoTotal();
    renderCarritoModal();
    console.log("len=".concat(carrito.length));
    window.location.href = "../index.html";
  }); //Fin logica para mostrar compra exitosa en modal

  var cantidadProductos = obtenerStorage('carrito').length;
  console.log("cantidadProductos = ".concat(cantidadProductos)); //Para mostrar cantidad de productos en el carrito e ir al carrito

  function obtenerStorage(clave) {
    var valor = JSON.parse(localStorage.getItem(clave));
    console.log("obtenerStorage - paso x 1 -index ".concat(valor));
    return valor;
  }

  var idLogoCarrito = document.getElementById("idLogoCarrito");
  idLogoCarrito.addEventListener("click", mostrarCarrito);

  function mostrarCarrito() {
    if (obtenerStorage('carrito').length > 0) {
      console.log("paso por carrito 1");
      window.location.href = "../vistas/carritoPrincipal.html";
    } else {
      console.log("paso por carrito 2");
      alert('No hay productos en el carrito');
    }
  }

  var idStyleBubbleCart = document.getElementById("idStyleBubbleCart");
  idStyleBubbleCart.innerText = obtenerStorage('carrito').length;
});