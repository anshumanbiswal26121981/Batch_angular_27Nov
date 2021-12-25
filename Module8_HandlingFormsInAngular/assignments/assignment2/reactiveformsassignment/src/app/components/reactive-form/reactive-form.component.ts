import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      fullname: [''],
      address: [''],
      city: [''],
      email: [''],
      phoneno: [''],
      password: [''],
      confirmPassword: [''],
      tosaccepted: ['']
    });
  }

  onSubmitForm(){
    this.submitted = true;
    //make api call and save data in backend
  }
}
