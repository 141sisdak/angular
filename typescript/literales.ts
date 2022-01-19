(function(){
    
function getEdad(){
    return 143+23;
}
 
const nombre = 'Alejandro';
const apellidos = 'Herández Palomares';
const edad = 35;

const salida = `Nombre: ${nombre} \n Apellidos: ${apellidos} \nEdad: ${edad + 100}\nEdad rara: ${getEdad()}`;

//Edad + 100 lo suma de forma virtual, el valor de la variable no cambia
//En los literales podemos imprimir directamente el valor devuelto por una fucion
console.log(salida);


 

})();



