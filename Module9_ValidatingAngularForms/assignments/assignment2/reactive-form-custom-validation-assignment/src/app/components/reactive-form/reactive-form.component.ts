import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup = this._formBuilder.group({});
  submitted = false;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // initialize the form fields
    this.registerForm = this._formBuilder.group({
      fullname: ['',[Validators.required]],
      address: [''],
      city: [''],
      email: ['',[Validators.required,Validators.pattern("/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/")]],
      phoneno: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(12)]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      tosaccepted: [false,Validators.requiredTrue]
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmitForm(){
    this.submitted = true;
    //make api call and save data in backend
  }

  get f() {
    return this.registerForm.controls;
  }

  checkRequiredValidation(control: string) {
    return this.f[control].errors?.['required'];
  }

  checkEmailValidation(control: string) {
    return this.f[control].errors?.['email'];
  }

  checkminLengthValidation(control: string) {
    return this.f[control].errors?.['minlength'];
  }

  checkmaxLengthValidation(control: string) {
    return this.f[control].errors?.['maxlength'];
  }
}
