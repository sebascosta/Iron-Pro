let lista = '';


class producto {
    constructor (nombre, precio, stock, images, value ) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.images = images;
        this.value = value;
        
    }};
    


    const productoDos = new producto ('Kettlebell 8kg', 1150, 10, 'img/KB8.png', 1 );
    const productoTres = new producto ('Kettlebell 10kg', 2300, 10,'img/KB10.png', 1 );
    const productoCuatro = new producto ('Kettlebell 20kg', 4600, 10, 'img/KB20.png',1 );
    const productoCinco = new producto ('Kettlebell 5kg', 330, 10, 'img/KB5.png',1 );
    const productoSeis = new producto ('Kettlebell PVC xKg', 200, 10, 'img/KBpvc.png',1 );
    const productoSiete = new producto ('Kettlebell 12kg', 600, 10,'img/KB12.png' ,1 );

    let productList = [productoDos, productoTres, productoCuatro, productoCinco,  productoSeis, productoSiete ]; 

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
        <button onclick= "agregarItem( ${productList[i].nombre})">Agregar al carrito</button>    
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>    
        </div>
        </div>
        </div>`
    };

  document.getElementById('articulos').innerHTML = lista;