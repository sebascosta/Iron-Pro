//let almacenamiento = localStorage.getItem('carrito');

let lista= '';



/*
if (almacenamiento == 'null'){
    carrito = [];
}else{
    carrito = almacenamiento;
}
*/

// función constructora 
class producto {
    constructor (id, nombre, precio, stock, images){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.images = images
}
    sumaIva (){
        this.precio = precio *1.21;
    }
    stockTotal (){
        if (this.stock > 0) {
            alert ('Se agregó el producto a tu carrito')
        } else { alert('No tenemos stock disponible')}
    }
};

    //Objetos nuevos:
    //const productoDos = new producto ('Kettlebell 8kg', 1150, 10, 'img/KB8.png');
    //const productoTres = new producto ('Kettlebell 10kg', 2300, 10,'img/KB10.png');
    //const productoCuatro = new producto ('Kettlebell 20kg', 4600, 10, 'img/KB20.png');
    //const productoCinco = new producto ('Kettlebell 5kg', 330, 10, 'img/KB5.png');
    //const productoSeis = new producto ('Kettlebell PVC xKg', 200, 10, 'img/KBpvc.png');
    //const productoSiete = new producto ('Kettlebell 12kg', 2800, 10,'img/KB12.png');

    //let productList = [productoDos, productoTres, productoCuatro, productoCinco,  productoSeis, productoSiete];
    


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Creacion de array de productos //

    const productList = [];

    productList.push(productoDos = new producto (2,'Colchoneta', 1150, 10, 'img/KB8.png'));
    productList.push(productoTres = new producto (3,'Colchoneta', 2300, 10,'img/KB10.png'))
    productList.push(productoCuatro = new producto (4,'Kettlebell 20kg', 4600, 10, 'img/KB20.png'))
    productList.push(productoCinco = new producto (5,'Kettlebell 5kg', 330, 10, 'img/KB5.png'));
    productList.push(productoSeis = new producto (6,'Kettlebell PVC xKg', 200, 10, 'img/KBpvc.png'))
    productList.push(productoSiete = new producto (7,'Kettlebell 12kg', 2800, 10,'img/KB12.png'))
    
    //Aplicando filtro a un array//
    
    //const baratos = productList.filter(producto => producto.precio < 1000);
    //console.log(baratos)
   

    //Creación de cards con nuevos articulos:
    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="col-lg-4 col-md-6 mb-4 >
        <div class="card h-100 style= "box-shadow: 4px 5px 5px lightgrey; border-radius:4px">
        <a href="#"><img class="card-img-top" style = "height 32rem"src="${productList[i].images}" alt="Imagen"></a>
        <div class="card-body">
        <h4 class="card-title">
        <a href="#"> ${productList[i].nombre} </a>
        </h4>
        <h5> $${productList[i].precio}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="card-footer" style= "text-align: center">
        <button type="button" class="btn btn-primary"button onclick= " agregarItem(${productList[i].id})">Agregar al carrito</button>           
        </div>
        </div>
        </div>`;
    };

  document.getElementById('articulos').innerHTML = lista;


/*
  function addToCart(precio){
        localStorage.setItem ('carrito', carrito)   
        carrito +=  precio
        alert(`Se agregó el artículo al carrito y el total es: ${carrito}`)

  }
*///////////////////////////////

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

}


const contenedorModal = document.getElementsByClassName('modal-contenedor')[0];
const botonAbrir = document.getElementById('boton-carrito');












 
