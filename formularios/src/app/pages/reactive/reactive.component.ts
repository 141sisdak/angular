import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private validadorCustom :ValidadoresService) {

    this.crearFormulario();
    this.cargarDataForm();
    this.crearListeners();

   }

  //El oninit se llama una vez se ha creado el html
  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.form.get('nombre')!.invalid && this.form.get('nombre')!.touched;
  }
  get apellidoNoValido(){
    return this.form.get('apellido')!.invalid && this.form.get('apellido')!.touched;
  }
  get emailNoValido(){
    return this.form.get('email')!.invalid && this.form.get('email')!.touched;
  }

  get usuarioNoValido(){
    return this.form.get('usuario')!.invalid && this.form.get('usuario')!.touched;
  }

  get poblacionNoValido(){
    return this.form.get('direccion.poblacion')!.invalid && this.form.get('direccion.poblacion')!.touched;
  }
  get ciudadNoValido(){
    return this.form.get('direccion.ciudad')!.invalid && this.form.get('direccion.ciudad')!.touched;
  }

  get pass1NoValido(){
    return this.form.get('pass1')!.invalid && this.form.get('pass1')!.touched;
  }

  
  get pass2NoValido(){
    const pass1 = this.form.get('pass1')!.value;
    const pass2 = this.form.get('pass2')!.value;

    return (pass1 === pass2) ? false : true;
  }

  get pasatiempos(){
    return this.form.get('pasatiempos') as FormArray;
  }

  crearFormulario(){

    this.form = this.formBuilder.group({
      nombre!: ['', [Validators.required, Validators.minLength(5)]],//['por defecto', 'validador SINCRONO', 'validador ASINCRONO']
      apellido: ['', [Validators.required, this.validadorCustom.nohernandez]],
      email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      usuario: ['', ,this.validadorCustom.existeUsuario],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.formBuilder.group({
        poblacion: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    },{
      validators: this.validadorCustom.passwordsIguales('pass1', 'pass2')
    })

  }

  cargarDataForm(){

    this.form.reset({
      nombre: 'Alejandro',//['por defecto', 'validador SINCRONO', 'validador ASINCRONO']
      apellido:'Hernandez',
      email:'alejandro@gmail.com',
      pass1: '123',
      pass2: '123',
      direccion:{
        poblacion:'Burchisot' ,
        ciudad:'Valensia'
      },

    });
  
  }

  crearListeners(){
    
    this.form.get('nombre')!.valueChanges.subscribe(console.log)
      
  }

  guardar(){

    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control =>{
        control.markAsTouched();
      })
    }
    console.log(this.form); 

    //Despues de hacer el post o update o lo que sea podemos limpiar los campos
    //this.form.reset();
  }

  agregarPasatiempo(){
    this.pasatiempos.push(this.formBuilder.control('', ));
  }

  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }

}
