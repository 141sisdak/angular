(()=>{

  //Extraer variables de OBJETOS (usamos {})********************************

  const avenger = {
      nombre : 'Steve',
      clave : 'Capitan America',
      poder : 'Droga'
  }
/**Para extraer debemos hacerlo con el mismo nombre del atributo con la siguiente sintaxis;
 * Si ponemos nombre_ ya no lo pilla
 * No importa el orden
 */
  const {nombre, clave, poder} = avenger;

  //console.log(nombre);

  //Tambien podemos hacer una funcion que desestructure al vuelo en los parametros de la función 
  // y pasandole el objeto a desestructurar en la llamada a la funcion

  const extraer = ({nombre, poder}:any)=>{
      console.log(nombre);
      console.log(poder);
  }

  extraer(avenger);

  //Extraer variables de ARRAYS (usamos [])********************************
  //Aquí el orden SI importa, para saltarnos un elmento del array dejamos un espacio vacio
  //NO importa el nombre con el que extraigamos. En vez de Thor he puesto jose y en vez de spiderman he puesto maria,
  //pero devolverá igualmente thor y spiderman

  const avengers: string[] =['Thor', 'Ironman', 'Spiderman'];

  const [jose, , maria] = avengers;

  //Tambien podemos hacer una funcion que desestructure al vuelo en los parametros de la función 
  // y pasandole el objeto a desestructurar en la llamada a la funcion

  const extraerArr = ([jose, , maria]:string[])=>{
    console.log(jose);
    console.log(maria);
}

extraerArr(avengers);

})();



