import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate{
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  nohernandez(control: FormControl): ErrorValidate | null{

    if(control.value?.toLowerCase()==='hernandez'){      
      return {nohernandez: true}
    }

    return null;

  }

  passwordsIguales(pass1Name: string, pass2Name: string){
    
    return (FormGroup: FormGroup)=>{
      
      const pass1Control = FormGroup.controls[pass1Name];
      const pass2Control = FormGroup.controls[pass2Name];

      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual: true});
      }

    }
      
  }

  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable <ErrorValidate> | Promise<any>{

    if(!control.value){
      return Promise.resolve(null);
    } 

    return new Promise((resolve, reject)=>{
      setTimeout(() => {

        if(control.value === 'paco'){
          resolve({existe:true})
        }else{
          resolve(null)
        }
        
      }, 3500);
    })
  }
}
