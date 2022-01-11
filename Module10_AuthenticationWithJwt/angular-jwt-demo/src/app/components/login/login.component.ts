import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this._formBuilder.group({});

  submitted = false;

  error = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    // initialise the form fields

    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })

  }

  checkMustMatchValidation(control: string) {
    return this.f[control].errors?.['mustMatch'];
  }

  get f() {
    return this.loginForm.controls;
  }

  checkRequiredValidation(control: string) {
    return this.f[control].errors?.['required'];
  }

  checkEmailValidation(control: string) {
    return this.f[control].errors?.['email'];
  }


  checkMinValidation(control: string) {
    return this.f[control].errors?.['minlength'];
  }


  onSubmitForm() {
    this.error = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.error = 'Invalid Entry'
      return;
    }

    // make API call and login the user
    this._authenticationService.login(this.f['email'].value, this.f['password'].value)
      .pipe(
        first()
      )
      .subscribe((data: any) => {
        this._router.navigate(['/home']);
      }, error => {
        this.error = error.message;
      })
  }
}
