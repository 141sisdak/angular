import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes:any[]): string {
    
    if(!imagenes){//Si viene un null, undefined etc...
      return 'assets/img/noimage.jpg'
    }

    if(imagenes.length >0){
      return imagenes[1].url
    }else{
      return 'assets/img/noimage.jpg'
    }
    
    
  }

}
