let lista= '';
let carrito= [];

class producto {
    constructor (nombre, precio, stock, images){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.images = images
    }
}

const productList = [];

    productList.push(productoUno = new producto ('Mancuerna 8kg', 1150, 10, 'img/hexa3.png'));
    productList.push(productoDos = new producto ('Mancuerna 10kg', 2300, 10,'img/hexa3.png'))
    productList.push(productoTres = new producto ('Mancuerna 20kg', 4600, 10, 'img/hexa2.png'))
    productList.push(productoCuatro = new producto ('Mancuerna 5kg', 330, 10, 'img/hexa3.png'));
    productList.push(productoCinco = new producto ('Mancuerna PVC xKg', 200, 10, 'img/hexapvc.png'))
    productList.push(productoSeis = new producto ('Mancuerna 12kg', 2600, 10, 'img/hexa3.png'))

    for (let i = 0; i < productList.length; i++) {  
        lista += `<div class="container-card">
        <div class="card">
                <div class="sneaker">
                    <div class="circle"></div>
                    <img src="${productList[i].images}" style="width:12rem" alt="kb">
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
