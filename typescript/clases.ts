(()=>{
/**
 * FORMA NORMAL DE DECLARAR LA CLASE
 * 
 * class Avenger{

    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string, equipo:string){

      this.nombre = nombre;
      this.equipo = equipo;

    }

  } */

  //FORMA PRO 
  class Avenger{

    

    constructor(public nombre:string,//Obligatorio
                public equipo:string,//Obligatorio
                public nombreReal?:string,//Opcional
                public puedePelear:boolean = true,//Opcional
                public peleasGanadas:number = 0//Defecto
      ){}

  }
  

  const antman = new Avenger('nombreAvenger', 'EquipoAvenger');

})();



