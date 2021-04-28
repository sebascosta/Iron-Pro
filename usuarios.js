
class users {
    constructor (id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;        
        this.email = email;
        this.password = password;
        
    }
}
const usersBase = [];


usersBase.push(userUno = new users (1, "toto", "toto@coderhouse.com", "Abc123" ));
usersBase.push(userDos = new users (2, "seba", "seba@coderhouse.com", "Abc1234" ));
usersBase.push(userTres = new users (3, "pato", "pato@coderhouse.com", "Abc1234" ));
usersBase.push(userCuatro = new users (4, "santi", "santi@coderhouse.com", "Abc1234" ));
usersBase.push(userCuatro = new users (4, "Tomy", "tomy@coderhouse.com", "Abc123as4" ));

console.log (usersBase)
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

/*
agregarItem([producto]);

function agregarItem (producto){
    //producto
    carrito.push(producto);

    localStorage.carrito = carrito;
}

*/


lista = "";

for (let i = 0; i < usersBase.length; i++) {  
    lista +=
        `<thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th scope="row">${usersBase[i].id}</th>
        <td>${usersBase[i].nombre}</td>
        <td>${usersBase[i].email}</td>
        <td>${usersBase[i].password}</td>
        </tr>
        
        </tbody>`
};

document.getElementById('tabla-users').innerHTML = lista;

console.log(document.body);