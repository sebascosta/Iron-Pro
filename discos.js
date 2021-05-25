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
 ////////////////////////////////////////////////////////////////////////////////////////////////
 
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





