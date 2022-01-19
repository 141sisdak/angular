(function(){
    
   const retirarDinero = (montoRetirar:number):Promise<number>=>{//Con :Promise<number> Le decimos el tipado del retorno

       let dineroActual= 1000;

       return new Promise((resolve, reject)=>{
           if(montoRetirar>dineroActual){
               reject('No hay suficientes fondos');               
           }else{
               dineroActual -= montoRetirar;
               resolve(dineroActual);
           }
       })

   }

   retirarDinero(1500)
   .then(montoActual => console.log('Te quedan ' + montoActual + ' €'))
   .catch(error=> console.warn(error));

})();



