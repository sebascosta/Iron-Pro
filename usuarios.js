
class users {
    constructor (nombre, edad, email, password ) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.email = email;
        this.password = password;
    }
}

const userUno = new users ("toto", 26, "toto@coderhouse.com", "Abc123" );

const userDos = new users ("seba", 33,  "seba@coderhouse.com", "Abc1234" );




////////////////////////////////////////////////////////////////////////////////

/**guardamos los datos del storage */

let storageValue = localStorage.carrito; //null 
let carrito = []; 

//preguntamos si hay datos del carrito en el storage //

if(storageValue == null){
    carrito = []; // si no hay, lo dejamos vacío// entra por aca porque es null
}else{
    carrito= storageValue; // si hay, lo llenamos con datos que hay
}


agregarItem([producto]);

function agregarItem (producto){
    //producto
    carrito.push(producto);

    localStorage.carrito = carrito;
}







