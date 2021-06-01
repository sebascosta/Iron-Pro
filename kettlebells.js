let lista= '';
let productList = [];
const carritoCompra = localStorage.getItem("carrito")
const contenedorCarrito = document.getElementById('contenido-cart');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


////////////////////////////////////Actualizar carrito////////////////////////////////////////////////////

 function actualizarCarrito(){
     
  contenedorCarrito.innerHTML = '';
  
      carrito.forEach((producto)=>{      
          
          const div = document.createElement('div')
          div.classList.add('productoEnCarrito')
          div.innerHTML = `        
          <div><img src="${producto.images}" style="width: 50px;
          margin-right: 20px;"></div>   
          <p class="p-cart">${producto.nombre}</p>
          <p class="p-cart">Precio:$${producto.precio}</p>        
          <button class="boton-eliminar" onclick = eliminarProducto(${producto.id}) style = "width: 20px;
          background-color: indianred;
          color: white;"><i class="bi bi-trash-fill"></i></button>     
              
              `
              contenedorCarrito.appendChild(div)
              console.log("se agrego")
      })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, el)=>acc+= el.precio, 0)
  }
let carrito=[] 
if(carritoCompra != null){
    carrito = JSON.parse(carritoCompra);
   actualizarCarrito()
}

class producto {
    constructor (id, nombre, precio, stock, images){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.images = images
    }
}


    productList.push(productoUno = new producto (1,'Kettlebell 5kg', 1150, 10, 'img/KB-prueba.png'));
    productList.push(productoDos = new producto (2, 'Kettlebell 8kg', 2300, 10,'img/KB-prueba.png'))
    productList.push(productoTres = new producto (3,'Kettlebell 10kg', 3600, 10, 'img/KB-prueba.png'))
    productList.push(productoCuatro = new producto (4,'Kettlebell 12kg', 4330, 10, 'img/KB-prueba.png'));
    productList.push(productoCinco = new producto (5,'Kettlebell PVC xKg', 200, 10,'img/KBpvc.png'))
    productList.push(productoSeis = new producto (6,'Kettlebell 20kg', 4600, 10,'img/KB-prueba.png'))


    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="container-card">
        <div class="card">
                <div class="sneaker">
                    <div class="circle"></div>
                    <img src="${productList[i].images}" alt="kb">
                </div>
                    
            <div class="info">
                <h1 class="title">${productList[i].nombre}</h1>    
                    <h3>MANCUERNA RUSA KETTLEBELL GENETIC PRO</h3>
            </div>
           
            <div class="purchase">
                <button onclick= "agregarItem(${productList[i].id})">Comprar</button>
            </div>
        </div>
    </div>
    `
    };

  document.getElementById('articulos').innerHTML = lista;





function agregarItem(id){
    
    let productoElegido = productList.find(el => el.id == id);    
    if(productoElegido){
        carrito.push(productoElegido)   
    }else{ 
        alert('Producto no disponible')
    }    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)

    actualizarCarrito();
}






////////Eliminar producto del carrito////

function eliminarProducto(id){
    let productoEliminado = carrito.find(el => el.id == id)
    let indice = carrito.indexOf(productoEliminado)
    carrito.splice(indice,1)

    actualizarCarrito();
    console.log(productoEliminado)
    console.log(indice)
}

////////////////////////////Pagar con Mercado Pago//////////////////////////////

const finalizarCompra = async ()=> {
    console.log(carrito)
    const carritoAPagar = carrito.map((element)=>{
        let nuevoElemento = {
        title: element.nombre,
        description: "",
        picture_url: "",
        category_id: element.id,
        quantity: 1,
        currency_id: "ARS",
        unit_price: Number(element.precio)
    };
    return nuevoElemento
    console.log(nuevoElemento);
    })
  const resp = await fetch('https://api.mercadopago.com/checkout/preferences', 
  {
    method: 'POST',
    headers: {
        Authorization: "Bearer TEST-7029705243129413-052415-2a2304e788a67e62fa770bf04604ac39-67363854"
    },
    body: JSON.stringify({             
            items: carritoAPagar                
    })
  }
  )
  
  const data = await resp.json() 
  console.log(data)
  window.open(data.init_point, "_blank")
  }
  

/*
<div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Carrito de compras</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Finalizar compra</button>
        </div>
      </div>
    </div> 





    const modalContenedor = document.getElementsByClassName('modal-contenedor')[0];
const botonAbrir = document.getElementById('botonAbrir');
botonAbrir.addEventListener('click',()=>{
   modalContenedor.classList.toggle('modal-active');
})

const botonCerrar= document.getElementById('carritoCerrar');
botonCerrar.addEventListener('click',()=>{
    modalContenedor.classList.toggle('modal-active');
})

*/