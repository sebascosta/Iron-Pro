let lista = '';


class producto {
    constructor (nombre, precio, stock, images) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.images = images;
        
        
    }};
    


    const productoDos = new producto ('Kettlebell 8kg', 1150, 10, 'img/KB-prueba.png');
    const productoTres = new producto ('Kettlebell 10kg', 2300, 10,'img/KB-prueba.png');
    const productoCuatro = new producto ('Kettlebell 20kg', 4600, 10, 'img/KB-prueba.png');
    const productoCinco = new producto ('Kettlebell 5kg', 330, 10,'img/KB-prueba.png');
    const productoSeis = new producto ('Kettlebell PVC xKg', 200, 10,'img/KB-prueba.png');
    const productoSiete = new producto ('Kettlebell 12kg', 600, 10,'img/KB-prueba.png');

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
        lista += `<div class="container-card">
        <div class="card">
                <div class="sneaker">
                    <div class="circle"></div>
                    <img src="${productList[i].images}" alt="kb">
                </div>
                    
            <div class="info">
                <h1 class="title">${productList[i].nombre}</h1>    
                    <h3>MANCUERNA RUSA KETTLEBELL GENETIC PRO</h3>
            </div>
            <div class="sizes">
                <button>10</button>
                <button>12</button>
                <button class="active">15</button>
                <button>20</button>
            </div>
            <div class="purchase">
                <button>Comprar</button>
            </div>
        </div>
    </div>
    `
    };

  document.getElementById('articulos').innerHTML = lista;


//Se toma del dom el select y se asignan values para funcion filtrar del select//
  const selectFiltro = document.getElementById('opciones');

  function filtrar(){
    let filtro = selectFiltro.value;
    const arrayFiltrado = productLista.filter( el => el.nombre == filtro);
    console.log(arrayFiltrado)
  }
  