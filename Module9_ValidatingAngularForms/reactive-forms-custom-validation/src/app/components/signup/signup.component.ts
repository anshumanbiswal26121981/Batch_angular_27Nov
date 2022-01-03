import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup = this._formBuilder.group({});
  submitted = false;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // initialize the form fields
    this.registerForm = this._formBuilder.group({
      title: ['Mr', Validators.required],
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,, Validators.minLength(5)]],
      confirmPassword: ['',Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    })
  }

  mustMatch(ctrl1Name: string, ctrl2Name: string) {
    //checks teh validation
    return (fg: FormGroup) => {
      // extracts the values of the controls
      const pwd = fg.controls[ctrl1Name];
      const confirmPwd = fg.controls[ctrl2Name];
      // get teh existing errors
      const existingErrors = confirmPwd.errors;
      //compare the values
      if (pwd.value !== confirmPwd.value) {
        confirmPwd.setErrors({
          mustMatch: true,
          ...existingErrors // patch the exsiting errors
          
        })
      } else {
        confirmPwd.setErrors({
          mustMatch: false,
          ...existingErrors
        });
      }
      // if match no error, else error
    }
  }

  
  onSubmitForm(){
    debugger
    this.submitted = true;
    if(this.registerForm.invalid) {
      return;
    }

    //make api call and save data in backend
  }

  resetForm() {
    this.registerForm.reset;
  }

  setDefaultValues() {
    this.registerForm.setValue({
      title: 'Mr',
      firstName: '',
      lastName:'',
      dob: formatDate(new Date('09/07/1989'),'yyyy-MM-dd', 'en'),
      email: 'xyz@abc.com',
      password: '',
      confirPassword: ''
    })
  }

  patchValues() {
    this.registerForm.patchValue({
      title: 'Mrs',
      firstName: '',
      lastName:''
    })

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

  checkMustmatchValidation(control: string) {
    return this.f[control].errors?.['mustMatch'];
  }

  //setting validation after control is created dynamically
  setValidation() {
    debugger
    this.registerForm.controls['lastName'].addValidators(Validators.requiredTrue);
    this.registerForm.controls['lastName'].addValidators(Validators.maxLength(20));
    this.registerForm.controls['lastName'].updateValueAndValidity();
  }

  removeValidation() {
    debugger
    this.registerForm.controls['lastName'].removeValidators(Validators.requiredTrue);
    this.registerForm.controls['lastName'].updateValueAndValidity();
  }
}
