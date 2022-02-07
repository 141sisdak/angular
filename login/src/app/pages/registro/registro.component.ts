import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  
})
export class RegistroComponent {

  usuario = new UsuarioModel();

  recordar: boolean = false;


  constructor(private authService: AuthService, private router: Router) {

   }


  onSubmit(formulario: NgForm){

    if(!formulario.valid){return;}

    Swal.fire({
      allowOutsideClick: false,
      icon:'info',
      text:'Espere por favor...'
    });

    Swal.showLoading();

    this.authService.nuevoUsuario(this.usuario)
    .subscribe(respuesta =>{

      if(localStorage.getItem('email')){
       
        this.usuario.email = localStorage.getItem('email')|| '{}';
        this.recordar = true;
       }

      Swal.close();
      this.router.navigateByUrl('/home');
      
    }, (err)=>{
      Swal.fire({
        title: 'Error al registrarse',
        icon:'error',
        text:err.error.error.message
      });
    }
    );
 
  }
 

}
