/**
 * Clase Persona que contiene un constructor que almacena el nombre y los apellidos de la persona
 */
class Persona {
  constructor(nombre, apellidos) {
    this._nombre = nombre;
    this._apellidos = apellidos;
  }

  
  // Métodos Getters de la clase

  get Nombre() {
    return this._nombre;
  }

  get Apellidos() {
    return this._apellidos;
  }


  // Métodos Setters de la clase

  set Nombre(nombre) {
    this._nombre = nombre;
  }

  set Apellidos(apellidos) {
    this._apellidos = apellidos;
  }
}
