let productList = [];
/*
fetch('./productos.json')
.then(res => res.json())
.then(data =>{
    productList = data
    mostrarProductos(productList)
})
*/


const obtenerProductos = async () => {
const res = await fetch('./productos.json');
console.log(res)

const data = await res.json();
console.log(data)

productList = data;
console.log(productList)


mostrarProductos(productList)
console.log(mostrarProductos())
} 


obtenerProductos()

// FUNCION CONSTRUCTORA DE PRODUCTOS//

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

    //let productList = [productoDos, productoTres, productoCuatro, productoCinco,  productoSeis, productoSiete, productoOcho,productoNueve, productoDiez,productoOnce, productoDoce, productoTrece ]; 
            
    //let productosEnJson = JSON.stringify(productList)
//////////////////////////Funcion para mostrar cards////////////////////////

//mostrarProductos(productList)

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



//Se toma del dom el select y se asignan values para funcion filtrar del select//
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

  
  let carrito=[];

  function agregarItem(id){    
    let productoElegido = productList.find(el => el.id == id);
    
    if(productoElegido){
        carrito.push(productoElegido)
         
    }else{ 
        alert('Producto no disponible')
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito);

    actualizarCarrito();
}  

////////////////////////////////////////////////////////////////////////////////////////


const contenedorCarrito = document.getElementById('contenido-cart');

console.log(contenedorCarrito)

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
    })
}

////////////////////////////////////////Creador de div para productos/////////////////////////////////////
/* 
const contenedorProductos = document.getElementById('articulos')

mostrarProductos(productList);


function mostrarProductos(array){

    array.forEach((producto)=>{

    const div= document.createElement('div');

    div.innerHTML = `<div class="container-card">
        <div class="card">
                <div class="sneaker">
                    <div class="circle"></div>
                    <img src="${productList[0].images}" alt="kb">
                </div>
                    
            <div class="info">
                <h1 class="title">${productList[2].nombre}</h1>    
                    <h3>MANCUERNA RUSA KETTLEBELL GENETIC PRO</h3>
            </div>
            
            <div class="purchase">
            <button onclick= "agregarItem(${productList[0].id})">Comprar</button>
            </div>
        </div>
        </div>
        `
    articulos.appendChild(div)

})
}


*/

//document.getElementById('articulos').innerHTML = lista;



//FUNCION DE ACTUALIZAR EL CARRITO CON MODAL DE CONRADO y botones de abrir y cerrar modal

function actualizarCarrito(){
    carrito.forEach((producto)=>{  
    
    contenedorCarrito.innerHTML = '';
    
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `
            <p>${producto.nombre}</p>
            <p>Precio:$${producto.precio}</p>
            
            <button class="boton-eliminar"><i class="bi bi-trash-fill"></i></button>
            `
            contenedorCarrito.appendChild(div)
        })
    }

  


    /*
const modalContenedor = document.getElementsByClassName('modal-content')[0];
const botonAbrir = document.getElementById('botonAbrir');
botonAbrir.addEventListener('click',()=>{
   modalContenedor.classList.toggle('modal-active');
})

const botonCerrar= document.getElementById('carritoCerrar');
botonCerrar.addEventListener('click',()=>{
    modalContenedor.classList.toggle('modal-active');
})
*/

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
*/

////////////////////Creacion de productos para el filtro select///////////////////////////////
/*
    const productLista = [
        {"id":1,"nombre":"KB","precio":"$7426.27","stock":71},
        {"id":1,"nombre":"KB","precio":"$7426.27","stock":71},
        {"id":2,"nombre":"KB","precio":"$3021.99","stock":25},
        {"id":3,"nombre":"Discos","precio":"$6275.41","stock":90},
        {"id":4,"nombre":"Discos","precio":"$1444.96","stock":64},
        {"id":5,"nombre":"Discos","precio":"$1021.65","stock":30},
        {"id":6,"nombre":"barras","precio":"$7899.90","stock":29},
        {"id":7,"nombre":"barras","precio":"$8013.99","stock":93},
        {"id":8,"nombre":"Barras","precio":"$5100.32","stock":100},
        {"id":9,"nombre":"mancuernas","precio":"$863.62","stock":75},
        {"id":10,"nombre":"accesorios","precio":"$7542.19","stock":51}
    ]*/
//////////////////////////////////////////////////////////////////////////////////////////////////////

