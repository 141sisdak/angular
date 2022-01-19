(function(){
    
  interface Xmen{//Son las reglas que debe complir un objeto para poder usarlo como un tipo
    nombre:string;
    edad:number;  
    poder?:string;//Atributo opcional
}

const enviarMision = (xmen:Xmen)=>{//Ahora ya le podiemos decir que el tipo de dato que se le pasa tiene
    //que ser de tipo Xmen
    console.log(`Enviando a ${xmen.nombre} a la misión`);
}

const regresarMision = (xmen:Xmen)=>{//Lo mismo que en la funcion de arriba
    console.log(`${xmen.nombre} regresando`);
}

const wolverine:Xmen = {//Podemos usar el tipado a la hora de construir un objeto para obligar a que se cumplan
    //las reglas que le hemos puesto en la interface
    nombre:'Logan',
    edad:23
}

enviarMision(wolverine);
regresarMision(wolverine);

})();



