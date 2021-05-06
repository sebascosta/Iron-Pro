let lista = '';


class producto {
    constructor (nombre, precio, stock, images) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.images = images;
        
        
    }};
    


    const productoDos = new producto ('Kettlebell 8kg', 1150, 10, 'img/KB8.png');
    const productoTres = new producto ('Kettlebell 10kg', 2300, 10,'img/KB10.png');
    const productoCuatro = new producto ('Kettlebell 20kg', 4600, 10, 'img/KB20.png');
    const productoCinco = new producto ('Kettlebell 5kg', 330, 10, 'img/KB5.png');
    const productoSeis = new producto ('Kettlebell PVC xKg', 200, 10, 'img/KBpvc.png');
    const productoSiete = new producto ('Kettlebell 12kg', 600, 10,'img/KB12.png');

    let productList = [productoDos, productoTres, productoCuatro, productoCinco,  productoSeis, productoSiete ]; 
    



////////////////////Creacion de productos para el filtro select///////////////////////////////

    const productLista = [
        {"id":1,"nombre":"KB","precio":"$7426.27","stock":71},
        {"id":1,"nombre":"KB","precio":"$7426.27","stock":71},
        {"id":2,"nombre":"KB","precio":"$3021.99","stock":25},
        {"id":3,"nombre":"Discos","precio":"$6275.41","stock":90},
        {"id":4,"nombre":"Discos","precio":"$1444.96","stock":64},
        {"id":5,"nombre":"Discos","precio":"$1021.65","stock":30},
        {"id":6,"nombre":"barras","precio":"$7899.90","stock":29},
        {"id":7,"nombre":"barras","precio":"$8013.99","stock":93},
        {"id":8,"nombre":"Brabarras","precio":"$5100.32","stock":100},
        {"id":9,"nombre":"mancuernas","precio":"$863.62","stock":75},
        {"id":10,"nombre":"accesorios","precio":"$7542.19","stock":51}
    ]


    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="col-lg-4 col-md-6 mb-4 height: 100px">
        <div class="card h-100" style= "box-shadow: 4px 5px 5px lightgrey; border-radius:4px">
        <a href="#"><img class="card-img-top" src="${productList[i].images}" alt=""></a>
        <div class="card-body">
        <h4 class="card-title">
        <a href="#"> ${productList[i].nombre} </a>
        </h4>
        <h5> $${productList[i].precio}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="card-footer" style= "text-align: center">
        <button type="button" class="btn btn-primary" onclick= "agregarItem( ${productList[i].nombre})">Agregar al carrito</button>    
            
        </div>
        </div>
        </div>`
    };

  document.getElementById('articulos').innerHTML = lista;


//Se toma del dom el select y se asignan values para funcion filtrar del select//
  const selectFiltro = document.getElementById('opciones');

  function filtrar(){
    let filtro = selectFiltro.value;
    const arrayFiltrado = productLista.filter( el => el.nombre == filtro);
    console.log(arrayFiltrado)
  }
  