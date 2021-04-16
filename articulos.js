lista= '';


// función constructora 
class producto {
    constructor (nombre, precio, stock, images ) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.images = images;
        
    }
    sumaIva (){
        this.precio = precio *1.21;
    }
}


    //Objetos nuevos:
    const productoDos = new producto ('Kettlebell 8kg', 1150, 10, 'KB8.png' );
    const productoTres = new producto ('Kettlebell 10kg', 2300, 10,'KB10.png' );
    const productoCuatro = new producto ('Kettlebell 20kg', 4600, 10, 'KB20.png' );
    const productoCinco = new producto ('Kettlebell 5kg', 330, 10, 'KB5.png' );
    const productoSeis = new producto ('Kettlebell PVC xKg', 200, 10, 'KBpvc.png' );
    const productoSiete = new producto ('Kettlebell 12kg', 600, 10,'KB12.png'  );

    let productList = [productoDos, productoTres, productoCuatro, productoCinco,  productoSeis, productoSiete ]
    
    //Creación de cards con nuevos articulos:
    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${productList[i].images}" alt=""></a>
        <div class="card-body">
        <h4 class="card-title">
        <a href="#"> ${productList[i].nombre} </a>
        </h4>
        <h5> $${productList[i].precio}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="card-footer">
        <button onclick= "addToCart(${productList[i].nombre})">Agregar al carrito</button>    
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>    
        </div>
        </div>
        </div>`;
    }

  document.getElementById('kettlebell').innerHTML = lista;