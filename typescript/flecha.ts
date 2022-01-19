(function(){
//A - Normal
 const miFuncion = function (a:string){
     return a.toUpperCase;
 }
//A - Flecha
 const miFuncion2 = (a:string)=>a.toUpperCase;

//B - Normal
const sumarNormal = function(a:number, b:number){
    return a + b;
}

const sumarFlecha = (a:number, b:number)=>a+b;
 
/**
 * A parte de evitar codigo cuando solo vamos a escribir una linea de codigo dentro la funcion
 * las functiones de flecha no modifican a lo que apunta this. El código comentado está hecho sin la flecha y da error 
 * en this.
 * 
 * const hulk = {
    nombre: 'Hulk',
    smash(){
         setTimeout(function(){
            console.log(`${this.nombre} Smash!!!!`)
         })
    }
}
 */

const hulk = {
    nombre: 'Hulk',
    smash(){
         setTimeout(()=>{
            console.log(`${this.nombre} Smash!!!!`)
         })
    }
}

})();



