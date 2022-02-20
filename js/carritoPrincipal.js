function fCategoriaAretes() {
  // let valor = categoriaAretes.innerText.toLowerCase()
  localStorage.setItem("lscategoria", 1);
}

function fcategoriaCollares() {
  localStorage.setItem("lscategoria", 2);
}

function fcategoriaPulseras() {
  localStorage.setItem("lscategoria", 3);
}

//forma corta par el método ready
$(()=>{
  let carrito = [];
  //obtenemos el localStorage
  function obtenerStorage(clave) {
      const valor = JSON.parse(localStorage.getItem(clave));
      console.log(`obtenerStorage - paso x 1 ${valor}`);
      return valor;
  }

  //para actualizar el localStorage
  function guardarStorage(clave, valor) {
      localStorage.setItem(clave, JSON.stringify(valor));
  }

  if(obtenerStorage('carrito')) {
      carrito = obtenerStorage('carrito');    
  } else {
      alert('No hay nada en el carrito');
  }

  //cargamo el carrito en HTML
  function renderCarrito(){
    console.log(`renderCarrito: ${carrito.length}`);
    let i=0;

    //limpiamos el tbody para que no se acumule lo anaterior al realizar la recarga
    $(".tbody").empty();

    carrito.map(item => {
      i++;
      $(".tbody").append(`      
            <tr class="ItemCarrito">
              <td scope="row">${i}</td>
              <td class="table__productos">                
                <h6 class="title">${item.nombre}</h6>
              </td>
              <td class="table__price">
                <p>${item.precio}</p>
              </td>
              <td class="">                                                               
                <button id="btnMinus${item.id}" class="btn botonCantiCarrito ">-</button>
                  <span>${item.cantidad}</span>
                <button id="btnPlus${item.id}" class="btn botonCantiCarrito ">+</button>
              </td>             
              <td class="precioxcantidad ">
                <p class="colorAzul ">${item.precioxcantidad}</p>
              </td>
              <td>
                <button type="button" class="delete btn btn-danger botonEliminar">X</button>    
              </td>
            </tr>
      `);      
     
      $(".delete").on("click",(e)=>{
        removeItemCarrito(e);
      });

      $("#btnPlus"+item.id).on("click", (e)=>{      
        item.cantidad = item.cantidad + 1;
        CarritoTotal();        
      });  

      $("#btnMinus"+item.id).on("click", (e)=>{           
        if (item.cantidad >= 1){
            if (item.cantidad > 1){
              item.cantidad = item.cantidad - 1;
            }            
            CarritoTotal();
          } 
      });

    })      
  }

  //Sumatoria total de todo el carrito
  function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal');
    const itemCartTotalModal = document.querySelector('.itemCartTotalModal');

    carrito.forEach((item) => {            
      const precio = item.precio;      
      item.precioxcantidad = item.precio * item.cantidad; 
      Total = Total + precio * item.cantidad;
      console.log(`Total=${Total}`);
    })
      
    itemCartTotal.innerHTML = `Total $ ${Total}`;
    itemCartTotalModal.innerHTML = `Total $ ${Total}`;
    $(itemCartTotal).append
    guardarStorage('carrito', carrito);
    renderCarrito();
  }
  
  renderCarrito();
  CarritoTotal();
 
  //eliminar un registro del carrito
  function removeItemCarrito(e) {
    const buttonDelete = e.target    
    const tr = buttonDelete.closest(".ItemCarrito")    
    const title = tr.querySelector('.title').textContent;

    console.log(`len=${carrito.length}`);
    for(let i=0; i<carrito.length; i++){  
      if(carrito[i].nombre.trim() === title.trim()){        
        carrito.splice(i, 1)        
        break;        
      }
    }
        
    tr.remove()    
    guardarStorage('carrito', carrito);
    CarritoTotal()
    renderCarrito();
  }

  //Ini logica para mostrar compra exitosa en modal
  //cargamo el carrito en modal HTML
  function renderCarritoModal() {
    // console.log(`renderCarrito: ${carrito.length}`);
    let i=0;

    //limpiamos el tbody para que no se acumule lo anaterior al realizar la recarga
    $(".tbodyModal").empty();

    carrito.map(item => {
      i++;
      $(".tbodyModal").append(`      
            <tr class="ItemCarrito">
              <td scope="row">${i}</td>
              <td class="table__productos">                
                <h6 class="title">${item.nombre}</h6>
              </td>
              <td class="table__price" >
                <p class="colorRojo text-center" >${item.precio}</p>
              </td>
              <td class="colorVerde text-center" >                                                                               
                <span class="colorRojo">${item.cantidad}</span>                
              </td>             
              <td class="precioxcantidad ">
                <p class="colorAzul text-center">${item.precioxcantidad}</p>
              </td>
              <td>
            </tr>
      `);           

    })      
  }

  const idbuttonModal = document.getElementById("idbuttonModal");
  idbuttonModal.addEventListener("click",() => {
    console.log(`lenModal=${carrito.length}`);
    if (+carrito.length === 0){
      // alert("No existen registros en el carrito para realizar la compra");
      console.log(`lenModal_1=${carrito.length}`);
      // staticBackdrop.removeAttribute("id","")
      // const modalClass = document.getElementsByClassName("modalClass");
      const staticBackdrop = document.getElementById("staticBackdrop");
      staticBackdrop.id="valor";
    } else{
      console.log(`lenModal_2=${carrito.length}`);
      renderCarritoModal();
    }
    
  })  

  //Para vaciar el carrito
  const idbuttonClose = document.getElementById("idbuttonClose");
  idbuttonClose.addEventListener("click",() => {
    console.log(`len=${carrito.length}`);
    // carrito.pop();    
    carrito = [];
    guardarStorage('carrito', carrito);
    CarritoTotal()
    renderCarritoModal();
    console.log(`len=${carrito.length}`);

    window.location.href = "../index.html";    
  })
//Fin logica para mostrar compra exitosa en modal

let cantidadProductos =obtenerStorage('carrito').length;
console.log(`cantidadProductos = ${cantidadProductos}`);

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

})  
