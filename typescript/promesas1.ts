    (function(){
    
   console.log("Inicio");

    const prom1 = new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            resolve('Texto')//Resolve es como una variable donde se va a guardar la información de una petición
            //ajax por ejemplo
        }, 1000);

        //reject('Texto') Debe ir acompañado del CATCH 

    });

    prom1.then(mensaje=>console.log(mensaje)).catch(error=>console.warn('Fallo')).catch(error=> console.warn('No hay suficientes fondos'));

   console.log("Fin");

})();



