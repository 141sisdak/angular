

(()=>{     

// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {nombre,edad};
 
 
// Cree una interfaz que sirva para validar el siguiente objeto
interface Personaje{
    nombre:string;
    artesMarciales:string[]

}
let batman:Personaje = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
 
 
// Convertir esta funcion a una funcion de flecha
/**
function resultadoDoble( a, b ){
  return (a + b) * 2
}
 */
const restuladoDoble2 = (a:number, b:number) => (a+b)*2;
 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = 'cushisho' ){
  let mensaje ='';
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }

  return mensaje;
};
 
 console.log(getAvenger('lobesno', 'matar'));

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{

    constructor(
        public base:number,
        public altura:number
    ){}

}

let rec = new Rectangulo(2,54);

const calculaArea = (rectagulo:Rectangulo):number=>rectagulo.base * rectagulo.altura;

console.log(calculaArea(rec));

})();