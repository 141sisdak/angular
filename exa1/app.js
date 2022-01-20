"use strict";
(() => {
    // Uso de Let y Const
    let nombre = "Ricardo Tapia";
    let edad = 23;
    const PERSONAJE = { nombre, edad };
    let batman = {
        nombre: "Bruno Díaz",
        artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
    };
    // Convertir esta funcion a una funcion de flecha
    /**
    function resultadoDoble( a, b ){
      return (a + b) * 2
    }
     */
    const restuladoDoble2 = (a, b) => (a + b) * 2;
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = "arco"
    function getAvenger(nombre, poder, arma = 'cushisho') {
        let mensaje = '';
        if (poder) {
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        }
        else {
            mensaje = nombre + " tiene un " + poder;
        }
        return mensaje;
    }
    ;
    console.log(getAvenger('lobesno', 'matar'));
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
    }
    let rec = new Rectangulo(2, 54);
    const calculaArea = (rectagulo) => rectagulo.base * rectagulo.altura;
    console.log(calculaArea(rec));
})();
