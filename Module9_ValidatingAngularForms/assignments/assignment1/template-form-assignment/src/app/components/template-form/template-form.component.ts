import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  templateformmodel = {
    fullname:'',
    email:'',
    phoneno:'',
    password:'',
    confirmpassword:'',
    tosaccpted:''
  }

  formError= '';

  constructor() { }

  ngOnInit(): void {
  }

  login(myForm: NgForm) {
    debugger
    const {fullname,email,phoneno, password, confirmpassword, tosaccpted} = myForm.form.value;

    // can do validations before subimt teh data
    if (this.validateInputs(myForm.form.value)) {
      //make api calls to save the data or to login the user
    } else {
      //this.formError = 'Please provide valid inputs';
    }

  }

  validateInputs(formFields: any) {
    const {fullname,email,phoneno, password, confirmpassword, tosaccpted} = formFields;
    if (email.indexOf('@') < 0) {
      return false;
    }

    if (email.indexOf('.') < 0) {
      return false;
    }

    if (password === confirmpassword) {
      return true;
    } else {
      this.formError = 'Password and Confirm Password are different'
      return false;
    }
    // keep writing more validations as per requirements
    return true;
  }
}
