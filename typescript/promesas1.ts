    (function(){
    
   console.log("Inicio");

    const prom1 = new Promise((resolve, reject)=>{//Todos los objetos Promise necesitan de una funcion que recibe dos parametros:
        //resolve y reject.
        /**A la hora de llamar a la promesa el resolve ira con el .then y el reject ira con el .catch */
        
        setTimeout(() => {
            resolve('Texto')//Resolve es como una variable donde se va a guardar la información de una petición
            //ajax por ejemplo
        }, 1000);
        reject('No ha salido bien');

        //reject('Texto') Debe ir acompañado del CATCH 

    });

    prom1.then(datosRecibidos=>console.log(datosRecibidos))
    .catch(error=>console.warn(error));

   console.log("Fin");

})();



