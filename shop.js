let productList = [];
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

/////////Fetch con json de productos////////
const obtenerProductos = async () => {
    const res = await fetch('./productos.json');
    const data = await res.json();
    productList = data;
    mostrarProductos(productList)
} 
obtenerProductos();

//////////////////////////Funcion para mostrar cards////////////////////////

function mostrarProductos(array){
    let lista = '';


    for (let i = 0; i < array.length; i++) {  
        lista += `<div class="container-card">
        <div class="card">
                <div class="sneaker">
                    <div class="circle"></div>
                    <img src="${array[i].images}" alt="kb">
                </div>
                    
            <div class="info">
                <h1 class="title">${array[i].nombre}</h1>    
                    <h3>${array[i].description}</h3>
                    <h4 style= "text-align: center; color:red">$${array[i].precio}</h4>
            </div>
            
            <div class="purchase">
            <button onclick= "agregarItem(${array[i].id})">Comprar</button>
            </div>
        </div>
    </div>
    `
    };
    document.getElementById('articulos').innerHTML = lista;
}

///////////Se toma del dom el select y se asignan values para funcion filtrar del select//
  const selectFiltro = document.getElementById('opciones');

  function filtrar(){
    let filtro = selectFiltro.value;   
    if(filtro == "all"){
        mostrarProductos(productList)
    }else{
        mostrarProductos((productList.filter( el => el.tipo == filtro)))
        
    }    
 };
   ///
  ///////////////////////////////////Agregar Items al carrito//////////////////////////////////////////

  let carrito=[] 

  function agregarItem(id){
      
      let productoElegido = productList.find(el => el.id == id);
      if(productoElegido){
      carrito.push(productoElegido);
        
      }else{ 
          alert('Producto no disponible')
      }
      localStorage.setItem('carrito', JSON.stringify(carrito))
      console.log(carrito)
  
      actualizarCarrito();  
  }

////////////////////////////////////Actualizar carrito////////////////////////////////////////////////////
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



// FUNCION CONSTRUCTORA DE PRODUCTOS//
/*
class producto {
    constructor (id,tipo, nombre, precio, stock, images) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.images = images;               
    }};

    const productoDos = new producto (2,"kb",'Kettlebell 8kg', 1150, 10, 'img/KB-prueba.png');
    const productoTres = new producto (3,"kb",'Kettlebell 10kg', 2300, 10,'img/KB-prueba.png');
    const productoCuatro = new producto (4,"kb",'Kettlebell 20kg', 4600, 10, 'img/KB-prueba.png');
    const productoCinco = new producto (5,"kb",'Kettlebell 5kg', 330, 10,'img/KB-prueba.png');
    const productoSeis = new producto (6,"kb",'Kettlebell PVC xKg', 200, 10,'img/KBpvc.png');
    const productoSiete = new producto (7,"kb",'Kettlebell 12kg', 600, 10,'img/KB-prueba.png');
    const productoOcho = new producto (8,"mancuernas",'Mancuerna 8kg', 1150, 10, 'img/hexa3.png');
    const productoNueve = new producto (9,"mancuernas",'Mancuerna 10kg', 2300, 10,'img/hexa3.png');
    const productoDiez = new producto (10,"mancuernas",'Mancuerna 20kg', 4600, 10, 'img/hexa2.png');
    const productoOnce = new producto (11,"discos",'Disco fundición 10kg', 2200, 10, 'img/10kg.png');
    const productoDoce = new producto (12,"discos",'Disco fundición 10kg', 2200, 10, 'img/10kg.png');
    const productoTrece = new producto (13,"discos",'Disco fundición 10kg', 2200, 10, 'img/10kg.png');
*/
    //let productList = [productoDos, productoTres, productoCuatro, productoCinco,  productoSeis, productoSiete, productoOcho,productoNueve, productoDiez,productoOnce, productoDoce, productoTrece ]; 
            
    //let productosEnJson = JSON.stringify(productList)





