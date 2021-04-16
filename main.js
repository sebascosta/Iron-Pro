let desde = 0;
let precio = 2000;
let acumulador = ``;
let precios = [575, 1150, 2300, 4600, 330, 200];
let articulos = ['Discos 2.5kg', 'Discos 5kg', 'Discos 10kg', 'Discos 20kg', 'Discos Bumpers xKG', 'Discos PVC x KG'];
let images = ['2kg.png', '5kg.png', '10kg.png', '20kg.png', 'olimpicos.png', 'pvc.png' ];
let totalDelCarrito = 0;

for (let i = 0; i < articulos.length; i++) {  
  acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top" src="${images[i]}" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#"> ${articulos[i]} </a>
    </h4>
    <h5> $${precios[i]}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="card-footer">
    <button onclick= "addToCart(${precios[i]})">Agregar al carrito</button>    
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>    
    </div>
    </div>
    </div>`;
}

  document.getElementById('productos').innerHTML = acumulador;
  
 function addToCart(precios, articulos){
   totalDelCarrito+= precios  
  alert(`Se agregó el artículo al carrito. El total es: ${totalDelCarrito}.`);
 };

 
 ////////////////////////////////////////////////////////////////////////////////////////////////
 
 //Simulador de cuotas
 
 function calcularCuotas(valor, cuota){
   
   let interes = 0;
   
   if ( cuota <= 3 ){
     interes =  1.25; 
    }else if(cuota > 3 && cuota <= 6){
      interes = 1.40;
    }else if (cuota > 6 && cuota <= 12){
      interes = 1.50; 
    };
    
    return "El precio total en esas cuotas es " + (valor * interes)
  }
  //let monto = prompt('Ingrese monto del producto');
  //let cuota = parseInt(prompt('Ingrese cantidad de cuotas'));
  //alert (calcularCuotas (monto,cuota ));
  
  ////////////////////////////////////////////////////////////////////////////////////////////////




  /*function calcular(precio, totalDelCarrito){
    let total=0; 
    for(precio; precio<=totalDelCarrito; precio++){
      console.log(precio)
      total+= precio
    }
    return total
  }
 
 console.log(calcular(1,7))*/




