let lista= '';
let carrito= [];

class producto {
    constructor (nombre, precio, stock, images, medida){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.images = images
        this.medida = medida
    }
}

const productList = [];

    productList.push(productoUno = new producto ('Barra olimpica', 15000, 10, 'img/barra.jpg', "(2,20m)"));    
    productList.push(productoUno = new producto ('Barra olimpica', 15000, 10, 'img/barra.jpg',"(2,20m)"));
    productList.push(productoUno = new producto ('Barra olimpica', 15000, 10, 'img/barra.jpg', "(2,20m)"));
    productList.push(productoDos = new producto ('Barra acero', 3500, 10,'img/barra.jpg', "(1,10m)"));
    productList.push(productoTres = new producto ('Barra acero', 4000, 10, 'img/barra.jpg', "(1,50m)"))
    productList.push(productoCuatro = new producto ('Barra acero', 6000, 10, 'img/barra.jpg',"(1,80m)"));
    
    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100" style= "box-shadow: 4px 5px 5px lightgrey; border-radius:4px">
          <a href="#"><img class="card-img-top" src="${productList[i].images}" alt="Imagen producto"></a>
          <div class="card-body">
          <h4 class="card-title">
          <a href="#"> ${productList[i].nombre + " " + productList[i].medida} </a>          
          </h4>          
          <h5> $${productList[i].precio}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="card-footer" style= "text-align: center">
          <button type="button" class="btn btn-primary"button onclick= "addToCart(${productList[i].precio})">Agregar al carrito</button>    
            
          </div>
          </div>
          </div>`;
      }

document.getElementById('cards').innerHTML = lista;


function addToCart(precios){
    if(stock= 0){
      alert ('Lo sentimos, no tenemos stock en este momento!')
    }else {
    totalDelCarrito+= precios 
   alert(`Se agregó el artículo al carrito. El total es: ${totalDelCarrito}.`)};
  };
 

 