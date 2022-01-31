import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpass'
})
export class ShowpassPipe implements PipeTransform {

  transform(value: string, mostrar:boolean): string {


    return (mostrar) ? '*'.repeat(value.length) : value;
  }

}
