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

    productList.push(productoUno = new producto ('Mancuerna 8kg', 1150, 10, 'img/KB8.png'));
    productList.push(productoDos = new producto ('Mancuerna 10kg', 2300, 10,'img/KB10.png'))
    productList.push(productoTres = new producto ('Mancuerna 20kg', 4600, 10, 'img/KB20.png'))
    productList.push(productoCuatro = new producto ('Mancuerna 5kg', 330, 10, 'img/KB5.png'));
    productList.push(productoCinco = new producto ('Mancuerna PVC xKg', 200, 10, 'img/KBpvc.png'))
    productList.push(productoSeis = new producto ('Mancuerna 12kg', 2600, 10, 'img/KB.png'))

for (var i = 0; i < productList.length; i++){
lista +=`<div class="card" style="width: 20rem">
    <img src="img/mancuernas.jpg" class="card-img" alt="...">
    <div class="card-body">
      <h4 class="card-title">${productList[i].nombre}</h4>
      <h5>$${productList[i].precio}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
</div>`
}

document.getElementById('generateCards').innerHTML = lista;