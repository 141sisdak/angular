import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent {

  constructor(private actRoute:ActivatedRoute) {

    if(this.actRoute.parent){//Lo metemos dentro de un if porque el modo strict salta ya que dice que es posible que venga null

      this.actRoute.parent.params.subscribe(parametros=>{
        console.log('Ruta hija - Usuario nuevo');
        console.log(parametros);
        console.log('constructor');
      });
      
    }
   }

  

}