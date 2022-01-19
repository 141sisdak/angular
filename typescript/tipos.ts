(function(){
    
 /*Tipos de datos*/

 let mensaje = 'hola'//Si despues hacemos mensaje = 123; dara error porque angular ya le infiere el tipado

 //Consejo: Ponerle el tipo a cada variable:
 let algo : string = 'que';
 let algo2: number = 1;

 //En el caso antenior no llegar a ser obligatorio porque se ve claramente y es una simple variable, pero cuando
 //vamos a declarar una variable sin instanciarla si que es realmente aconsejable hacerlo para saber que va a contener
 //en un futuro

 let algo3: string;

 /*Crear objeto al vuelo (sin clase)*/

 let objetillo = {
     prop1: 'texto',
     prop2: 1234543
 }

 console.log(objetillo.prop1);

})();



