
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




