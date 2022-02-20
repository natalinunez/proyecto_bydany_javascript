"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var urlCategorias = '../data/categorias.json'; //este bloque de codigo es para establecer en el localStorage el valor de la categoria (1,2,3)
//que se seleccione en la pagina principal

function fCategoriaAretes() {
  localStorage.setItem('lscategoria', 1);
}

;

function fcategoriaCollares() {
  localStorage.setItem('lscategoria', 2);
}

;

function fcategoriaPulseras() {
  localStorage.setItem('lscategoria', 3);
}

; //Ini agregado por desafio: usar ajax y jquery

function colocarNombreCategoria(idCategoria) {
  $.getJSON(urlCategorias, function (response, status) {
    if (status === "success") {
      var datos = response;
      console.log("datos=" + datos); //no se puede visualizar datos correctamente

      console.log(datos);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = datos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var dato = _step.value;

          if (+dato.id === +idCategoria) {
            $("#idFontsizeColorWeight").append(dato.name);
            $("#idCategoriaEtiqueta").append("<h3 class=\"estiloNombreCategoria\">  ".concat(dato.description, "\n            </h3>"));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  });
} //Fin agregado por desafio: usar ajax y jquery


var productosCategoria,
    idCategoria,
    productos = [];
var contenedorProducto = document.getElementById('contenedorProducto');

var Producto =
/*#__PURE__*/
function () {
  function Producto(id, nombre, precio, categoria, imagen) {
    _classCallCheck(this, Producto);

    this.id = id, this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
  } // Metodos de la clase


  _createClass(Producto, [{
    key: "todosProductos",
    value: function todosProductos() {
      productos.push(new Producto(1, "Gota cristales", 10, "aretes", "../images/aretes/aretes-gota-cristales-dorado.jpg"));
      productos.push(new Producto(2, "Rayitos de luz", 20, "aretes", "../images/aretes/Aretes-rayito.jpg"));
      productos.push(new Producto(3, "Argollas chispas colgantes", 25, "aretes", "../images/aretes/Argollas-chispa-colgante.jpg"));
      productos.push(new Producto(4, "Argolla cristal con estrellas", 35, "aretes", "../images/aretes/Argollas-cristal-con-estrellas.jpg"));
      productos.push(new Producto(5, "argollas delgaditas", 33, "aretes", "../images/aretes/Argollas-delgaditas-14mm.jpg"));
      productos.push(new Producto(6, "Argolla doble cadena", 16, "aretes", "../images/aretes/Argollas-doble-cadena.jpg"));
      productos.push(new Producto(7, "Argolla doble", 14, "aretes", "../images/aretes/Argollas-doble.jpg"));
      productos.push(new Producto(8, "Corazón calado plata", 30, "collares", "../images/collares/cadena-corazon-calado-plata-1228x1536-1.jpg"));
      productos.push(new Producto(9, "Perla cristal", 35, "collares", "../images/collares/cadena-perla-cristal-1228x1536-1.jpg"));
      productos.push(new Producto(10, "Trinity tree", 35, "collares", "../images/collares/cadena-trinity-1229x1536-1.jpg"));
      productos.push(new Producto(11, "Mom calado", 30, "collares", "../images/collares/DSCF5839-1024x859-1.jpg"));
      productos.push(new Producto(12, "Estrella jerusalén", 35, "collares", "../images/collares/DSCF9672-1024x967-1.jpg"));
      productos.push(new Producto(13, "Corazón tree ", 35, "collares", "../images/collares/DSCF9684-scaled-1.jpg")); // productos.push(new Producto(14, "princesa", 35, "collares","../images/collares/Formato-Post.jpg")); 

      productos.push(new Producto(15, "María lola", 15, "pulseras", "../images/pulseras/Maria-lola-bf.jpg"));
      productos.push(new Producto(17, "Nico corona", 15, "pulseras", "../images/pulseras/nico-corona-scaled-1.jpg"));
      productos.push(new Producto(18, "Pulsera rodeada", 25, "pulseras", "../images/pulseras/pulsera_1.jpg"));
      productos.push(new Producto(19, "Julia lola", 15, "pulseras", "../images/pulseras/pulsera_4.jpg"));
      productos.push(new Producto(20, "Piedra bordada", 15, "pulseras", "../images/pulseras/pulsera_5.jpg"));
      productos.push(new Producto(21, "Pulsera colgante", 25, "pulseras", "../images/pulseras/pulsera_6.jpg"));
    }
  }, {
    key: "filtrarProductosCategoria",
    value: function filtrarProductosCategoria(idCategoria) {
      switch (idCategoria) {
        case 1:
          productosCategoria = productos.filter(function (producto) {
            return producto.categoria === "aretes";
          });
          break;

        case 2:
          productosCategoria = productos.filter(function (producto) {
            return producto.categoria === "collares";
          });
          break;

        case 3:
          productosCategoria = productos.filter(function (producto) {
            return producto.categoria === "pulseras";
          });
          break;

        default:
          break;
      }
    } //coloca los productos por categoria en el HTML

  }, {
    key: "renderProducts",
    value: function renderProducts(productosCategoria, contenedorProducto) {
      // let producto;
      productosCategoria.forEach(function (producto) {
        var cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'my-3', 'p-2', 'card__hover');
        cardDiv.setAttribute('style', 'width: 18rem;');
        var imagen = document.createElement('img');
        imagen.setAttribute('src', producto.imagen);
        imagen.setAttribute('class', 'card-img-top');
        cardDiv.appendChild(imagen);
        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body', 'm-auto', 'text-center', 'card__body', 'colorRojo', 'flexBody');
        var titulo = document.createElement('h5');
        titulo.classList.add('colorAzul');
        titulo.innerText = producto.nombre.toUpperCase();
        cardBodyDiv.appendChild(titulo);
        var precio = document.createElement('p');
        precio.classList.add('colorAzul');
        precio.innerText = "$ ".concat(producto.precio);
        cardBodyDiv.appendChild(precio);
        cardDiv.appendChild(cardBodyDiv);
        var boton = document.createElement('button');
        boton.classList.add('btn', 'card__boton', 'colorAzul');
        boton.setAttribute('id', producto.id);
        boton.innerText = 'Agregar al carrito';
        cardBodyDiv.appendChild(boton); // contenedor.appendChild(cardDiv);

        contenedorProducto.appendChild(cardDiv);
        boton.addEventListener('click', agregarAlCarrito);
      });
    }
  }]);

  return Producto;
}();

var Carrito = function Carrito(id, nombre, precio, cantidad, precioxcantidad) {
  _classCallCheck(this, Carrito);

  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
  this.precioxcantidad = precioxcantidad;
};

var carrito = [];

function guardarStorage(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerStorage(clave) {
  var valor = JSON.parse(localStorage.getItem(clave));
  return valor;
}

function agregarAlCarrito(event) {
  console.log(event.target.id);
  var idProductoElegido = event.target.id; // Matcheamos el id ingresado con el producto correspondiente a ese id    

  if (productos.some(function (producto) {
    return producto.id === parseInt(idProductoElegido);
  })) {
    if (obtenerStorage('carrito')) {
      carrito = obtenerStorage('carrito');

      if (carrito.some(function (producto) {
        return producto.id === parseInt(idProductoElegido);
      })) {
        var productoElegido = carrito.find(function (producto) {
          return producto.id === parseInt(idProductoElegido);
        });
        productoElegido.cantidad++;
        guardarStorage('carrito', carrito);
        console.log('x paso 1');
      } else {
        var _productoElegido = productos.find(function (producto) {
          return producto.id === parseInt(idProductoElegido);
        });

        var producto = new Carrito(_productoElegido.id, _productoElegido.nombre, _productoElegido.precio, 1, _productoElegido.precio);
        carrito.push(producto);
        guardarStorage('carrito', carrito);
        console.log('x paso 2');
      }
    } else {
      // alert('No hay nada en el carrito');
      var _productoElegido2 = productos.find(function (producto) {
        return producto.id === parseInt(idProductoElegido);
      });

      var _producto = new Carrito(_productoElegido2.id, _productoElegido2.nombre, _productoElegido2.precio, 1, _productoElegido2.precio);

      carrito.push(_producto);
      guardarStorage('carrito', carrito);
      console.log('x paso 2');
    }
  } else {
    alert('Ingrese un número de producto válido');
  }

  window.location.href = "../vistas/carritoPrincipal.html";
} //Instanciamos un objeto para llamar a los metodos de la clase


var productoMetodos = new Producto(); //Crea una lista de objetos de los productos

productoMetodos.todosProductos(); //obtenemos la categoria que elegimos en la pagina principal

idCategoria = +localStorage.getItem('lscategoria');
console.log("idCategoria=".concat(idCategoria)); //filtramos los productos por categoria

productoMetodos.filtrarProductosCategoria(idCategoria); //invocamos al metodo para renderizar en le HTML los productos por categoria

productoMetodos.renderProducts(productosCategoria, contenedorProducto);
colocarNombreCategoria(idCategoria);