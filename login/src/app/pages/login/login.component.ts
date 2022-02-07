import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {

  usuario = new UsuarioModel();
  recordar: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

     if(localStorage.getItem('email')){
       
      this.usuario.email = localStorage.getItem('email')|| '{}';
      this.recordar = true;
     }
      
    

  }


  onSubmit(form: NgForm){

    if(form.invalid) return;

    Swal.fire({
      allowOutsideClick: false,
      icon:'info',
      text:'Espere por favor...'
    });

    Swal.showLoading();

    this.auth.login(this.usuario)
    .subscribe((respuesta)=>{
      console.log(respuesta);
      Swal.close();

       if(this.recordar){
         localStorage.setItem('email', this.usuario.email);
       }

      this.router.navigateByUrl('/home');
    }, 
    
    (err)=>{
      console.log(err.error.error.message);
      Swal.fire({
        title: 'Error al autenticar',
        icon:'error',
        text:err.error.error.message
      });
    })
  }

}
