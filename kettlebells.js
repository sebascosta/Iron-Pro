let lista= '';


class producto {
    constructor (nombre, precio, stock, images){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.images = images
    }
}

const productList = [];

    productList.push(productoUno = new producto ('Kettlebell 5kg', 1150, 10, 'img/KB-prueba.png'));
    productList.push(productoDos = new producto ('Kettlebell 8kg', 2300, 10,'img/KB-prueba.png'))
    productList.push(productoTres = new producto ('Kettlebell 10kg', 3600, 10, 'img/KB-prueba.png'))
    productList.push(productoCuatro = new producto ('Kettlebell 12kg', 4330, 10, 'img/KB-prueba.png'));
    productList.push(productoCinco = new producto ('Kettlebell PVC xKg', 200, 10,'img/KB-prueba.png'))
    productList.push(productoSeis = new producto ('Kettlebell 20kg', 4600, 10,'img/KB-prueba.png'))


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
