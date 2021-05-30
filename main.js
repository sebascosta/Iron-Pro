let lista= '';
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

class producto {
    constructor (id, nombre, precio, stock, images){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.images = images
    }
}
const productList = [];

    productList.push(productoUno = new producto (1,'Mancuerna 8kg', 1150, 10, 'img/hexa3.png'));
    productList.push(productoDos = new producto (2,'Mancuerna 10kg', 2300, 10,'img/hexa3.png'))
    productList.push(productoTres = new producto (3,'Kettlebell 10kg', 3600, 10, 'img/KB-prueba.png'))
    productList.push(productoCuatro = new producto (4,'Kettlebell 12kg', 4330, 10, 'img/KB-prueba.png'));
    productList.push(productoCinco = new producto (5,'Disco fundición 10kg', 2200, 10, 'img/10kg.png'))
    productList.push(productoSeis = new producto (6,'Mancuerna 12kg', 2600, 10, 'img/hexa3.png'))

    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="container-card">
        <div class="card">
                <div class="sneaker">
                    <div class="circle"></div>
                    <img src="${productList[i].images}" style="width:7rem" alt="kb">
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

  document.getElementById('productos').innerHTML = lista;

  let carrito=[] 



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
 //////////////////////////////////Productos en carrito//////////////////////////////////////////////////////////////
 
 const contenedorCarrito = document.getElementById('contenido-cart');

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
  
  ////////Eliminar producto del carrito////

function eliminarProducto(id){
  let productoEliminado = carrito.find(el => el.id == id)
  let indice = carrito.indexOf(productoEliminado)
  carrito.splice(indice,1)

  actualizarCarrito();
  console.log(productoEliminado)
  console.log(indice)
}







 //Simulador de cuotas
 /*
 function calcularCuotas(valor, cuota){
   
   let interes = 0;
   
   if ( cuota <= 3 ){
     interes =  1.25; 
    }else if(cuota > 3 && cuota <= 6){
      interes = 1.40;
    }else if (cuota > 6 && cuota <= 12){
      interes = 1.50; 
    };
    totalInteres = (valor * interes)
    alert( "El precio total en esas cuotas es " + totalInteres);
  };
*/

  //let valor = parseInt(prompt('Ingrese monto del producto'));
  //let cuota = parseInt(prompt('Ingrese cantidad de cuotas'));
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
  /*function calcular(precio, totalDelCarrito){
    let total=0; 
    for(precio; precio<=totalDelCarrito; precio++){
      console.log(precio)
      total+= precio
    }
    return total
  }
 
 console.log(calcular(1,7))*/
 //console.log(document.body);


 /////////////////////////////////Local Storage Ingreso de usuario/////////////////////////////////////

/*
 let usuario; 

 const infoStorage = localStorage.getItem('usuario');

 if(infoStorage){
   usuario = infoStorage; 
 }else{ 
    usuario = prompt('Ingrese su nombre de usuario');
 }; 

 //alert('Bienvenido/a '+ usuario);
 localStorage.setItem('usuario', usuario);*/

 /////////////////////////////////////Ejercicio JQuery - Contactanos///////////////////////////////////////////////

const botonEnviar = $('#botonContacto');
const formDiv = $('#form-enviado');

botonEnviar.click((event)=>{
  event.preventDefault();
  
  formDiv.append(
    `
      
        <div class="modal-dialog">
          <div class="modal-content"style="background-color: lightskyblue">
            <div class="modal-header">
              <h4 class="modal-title">Contacto</h4>            
            </div>
            <div class="modal-body">
              <p>El formulario se envió correctamente</p>
            </div>
            <div class="modal-footer">
              <button id="cerrarBtn"type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
     
  `
    )
  
  const botonCerrar = $('#cerrarBtn');
  botonCerrar.click(() =>{
   $('#form-enviado').toggle();
  
  })
})


//////////////////////////////////Ejercicio de animaciones JQuery//////////////////////////

const cerrarPromo = $('#buttonPromo');

const promoDiv = $('#promo');

const buttonCupon = $('#buttonCupon');

const cuponDiv = $('#cuponDiv');


$('#buttonPromo').on('click',()=>{
  $('#promo').hide( function(){
    $(cuponDiv).fadeIn(2000)
  })
})

//////////////////////////////////////Animación intro/////////////////////////////////////////////////////////

const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: '-100%', duration: 1.5, });
tl.to('.intro', {y:'-100%', duration: 1}, "-=1");
tl.fromTo('.big-text',{opacity:0}, {opacity:1, duration: 1 });
tl.fromTo('nav',{opacity:1}, {opacity:1, duration: 0.5});


