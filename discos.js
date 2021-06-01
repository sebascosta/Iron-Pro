let lista= '';
let productList = [];
const carritoCompra = localStorage.getItem("carrito")
const contenedorCarrito = document.getElementById('contenido-cart');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

////////////////////////////actualizar carrito//////////////////////////////////////////////////////////////

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

  /////Storage////

  let carrito=[] 
if(carritoCompra != null){
    carrito = JSON.parse(carritoCompra);
   actualizarCarrito()
}
//////////////////////
class producto {
    constructor (id, nombre, precio, stock, images){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.images = images
    }
}


    productList.push(productoUno = new producto (5,'Disco fundición 10kg', 2200, 10, 'img/10kg.png'));
    productList.push(productoDos = new producto (5,'Disco fundición 10kg', 2200, 10, 'img/10kg.png'))
    productList.push(productoTres = new producto (5,'Disco fundición 10kg', 2200, 10, 'img/10kg.png'))
    productList.push(productoCuatro = new producto (5,'Disco fundición 10kg', 2200, 10, 'img/10kg.png'));
    productList.push(productoCinco = new producto (5,'Disco fundición 10kg', 2200, 10, 'img/10kg.png'))
    productList.push(productoSeis = new producto (5,'Disco fundición 10kg', 2200, 10, 'img/10kg.png'))

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





