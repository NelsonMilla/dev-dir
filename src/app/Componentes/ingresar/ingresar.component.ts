import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

type CamposDeUsuario = 'correo' | 'contrasena';
type FormErrors = { [u in CamposDeUsuario]: string };


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {
  ingresarFallo: boolean;
  formularioUsuarios: FormGroup;
  formErrors: FormErrors = {
    correo: 'fallo',
    contrasena: 'fallado',
  };
  MensajeValidacion = {
    correo: {
      required: '*Necesitamos una cuenta de correo.',
      email: '*Debes proporcionar una cuenta de correo valido.',
    },
    contrasena: {
      required: '*Necesitamos una contraseña para proteger tu cuenta.',
      pattern: '*La contraseña debe contener al menos una letra y un nunero.',
      minlength: '*La contraseña debe tener almenos 6 caracteres.',
      maxlength: '*La contraseña no puede tener más de 25 caracteres.',
    },
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
  }

  ingresarCuenta() {
    //
  }

  crearFormulario() {
    this.formularioUsuarios = this.fb.group({
      correo: ['', [
        Validators.required,
        Validators.email
      ]],
      contrasena: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]],
    });

    this.formularioUsuarios.valueChanges.subscribe((data) => this.datosCambiados(data));
    this.datosCambiados();
  }

  datosCambiados(data?: any) {
    if (!this.formularioUsuarios) { return; }
    const form = this.formularioUsuarios;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'correo' || 'contrasena')) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.MensajeValidacion[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }
  async IniciarConGitHub() {
    //
  }
 private despuesDeIniciar() {
  //  return this.route.navigate(['/']);
 }
}
