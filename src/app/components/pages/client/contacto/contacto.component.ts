import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import {Person} from '../../../../models/person';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass'],
  providers: [Person]

})
export class ContactoComponent implements OnInit {


  ngOnInit() {
  }

  validateForm: FormGroup;

  submitForm(value: { userName: string; email: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    localStorage.setItem('formulario_local', JSON.stringify(value));
    sessionStorage.setItem('formulario_session', JSON.stringify(value));
    this.persona.nombre = value.userName;
    this.persona.email = value.email;
    this.persona.mensaje = value.comment;
    console.log('Imprime persona');
    console.log(this.persona);
    console.log('Imprime session storage');
    console.log(sessionStorage.getItem('formulario_session'));


  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }



  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({error: true, duplicated: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });



  constructor(private fb: FormBuilder, private persona: Person) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]]
    });

  }


}



