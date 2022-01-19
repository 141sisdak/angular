(function(){

    /**
     * Orden:
     * 1º --> obligatorios
     * 2º --> opcionales
     * 3º --> por defecto 
     */
    
    function activar (quien:string, //Obligatorio
                    momento?: string,//Opcional
                    objeto: string = 'batiseñal'){//Por defecto

            if(momento){
                console.log(`${quien} activo la ${objeto} en la ${momento}`)
            }else{
                console.log(`${quien} activo la ${objeto}`); 
            }

        
        
    }


 
    activar('Gordon', 'tarde');

})();



