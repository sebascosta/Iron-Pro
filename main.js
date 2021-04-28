let desde = 0;
let precio = 2000;
let acumulador = ``;
let precios = [575, 1150, 2300, 4600, 330, 200];
let articulos = ['Discos 2.5kg', 'Discos 5kg', 'Discos 10kg', 'Discos 20kg', 'Discos Bumpers xKG', 'Discos PVC x KG'];
let images = ['img/2kg.png', 'img/5kg.png', 'img/10kg.png', 'img/20kg.png', 'img/olimpicos.png', 'img/pvc.png' ];
let totalDelCarrito = 0;
let stock = 10;

for (let i = 0; i < articulos.length; i++) {  
  acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100" style= "box-shadow: 4px 5px 5px lightgrey; border-radius:4px">
    <a href="#"><img class="card-img-top" src="${images[i]}" alt="Imagen producto"></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#"> ${articulos[i]} </a>
    </h4>
    <h5> $${precios[i]}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="card-footer" style= "text-align: center">
    <button type="button" class="btn btn-primary"button onclick= "addToCart(${precios[i]})">Agregar al carrito</button>    
      
    </div>
    </div>
    </div>`;
}

  document.getElementById('productos').innerHTML = acumulador;
  
 function addToCart(precios){
   if(stock= 0){
     alert ('Lo sentimos, no tenemos stock en este momento!')
   }else {
   totalDelCarrito+= precios 
  alert(`Se agregó el artículo al carrito. El total es: ${totalDelCarrito}.`)};
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
    totalInteres = (valor * interes)
    alert( "El precio total en esas cuotas es " + totalInteres);
  };


  //let valor = parseInt(prompt('Ingrese monto del producto'));
  //let cuota = parseInt(prompt('Ingrese cantidad de cuotas'));
  
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




 console.log(document.body);