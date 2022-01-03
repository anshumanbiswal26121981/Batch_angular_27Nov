import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginmodel = {
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  formError= '';

  login(myForm: NgForm) {
    debugger
    const {username, password} = myForm.form.value;

    // can do validations before subimt teh data
    if (this.validateInputs(myForm.form.value)) {
      //make api calls to save the data or to login the user
    } else {
      this.formError = 'Please provide valid inputs';
    }

  }

  validateInputs(formFields: any) {
    const {username, password} = formFields;
    if (username.indexOf('@') < 0) {
      return false;
    }

    if (username.indexOf('.') < 0) {
      return false;
    }

    // keep writing more validations as per requirements
    return true;
  }
}
