import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises: any[] = [];

  usuario ={
    nombre: 'Alejandro',
    apellido: 'Hernández',
    email: 'alejandroherpal@gmail.com',
    pais:'',
    genero:''
    
  }

  constructor(private paisServ: PaisService) { }

  ngOnInit(): void {
    this.paisServ.getPaises()
    .subscribe(respuesta =>{
      this.paises = respuesta;
      this.paises.unshift({nombre: 'Selecciona pais', codigo:''});
      
    })
  }

  guardar(form: NgForm){
    console.log(form);

    if(form.invalid){
      Object.values(form.controls).forEach(control =>{
        control.markAsTouched();
      })
    }

    console.log(form.value)
  }

}
