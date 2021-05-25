let lista= '';


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
    productList.push(productoTres = new producto (3,'Mancuerna 20kg', 4600, 10, 'img/hexa2.png'))
    productList.push(productoCuatro = new producto (4,'Mancuerna 5kg', 330, 10, 'img/hexa3.png'));
    productList.push(productoCinco = new producto (5,'Mancuerna PVC xKg', 200, 10, 'img/hexapvc.png'))
    productList.push(productoSeis = new producto (6,'Mancuerna 12kg', 2600, 10, 'img/hexa3.png'))

    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="container-card">
        <div class="card">
                <div class="sneaker">
                    <div class="circle"></div>
                    <img src="${productList[i].images}" style="width:12rem" alt="kb">
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
    actualizarCarrito()
}



const contenedorCarrito = document.getElementById('contenido-cart');

 function actualizarCarrito(){
     
  contenedorCarrito.innerHTML = '';
  
      carrito.forEach((producto)=>{      
          
          const div = document.createElement('div')
          div.classList.add('productoEnCarrito')
          div.innerHTML = `        
              <p class="p-cart">${producto.nombre}</p>
              <p class="p-cart">Precio:$${producto.precio}</p>        
              <button class="boton-eliminar"><i class="bi bi-trash-fill"></i></button>
              
              `
              contenedorCarrito.appendChild(div)
              console.log("se agrego")
      })
  }
