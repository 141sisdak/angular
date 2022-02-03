import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementR: ElementRef) {

    console.log('directiva inicializada');
    //elementR.nativeElement.style.backgroundColor = 'yellow';
    
   }

   @Input('appResaltado') nuevoColor:string = '';

   @HostListener('mouseenter') mouseEntra(){

    this.resaltar(this.nuevoColor)
    
   }

   @HostListener('mouseleave') mouseSale(){
    this.resaltar('');
   }

   private resaltar (color:string = 'yellow'){
    this.elementR.nativeElement.style.backgroundColor = color
     }

}
