import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//   loginForm: FormGroup = this.formBuilder.group({});
//   loading = false;
//   submitted = false;
//   returnUrl: string = '';
//   error = '';

  
//   constructor(
//       private formBuilder: FormBuilder,
//       private route: ActivatedRoute,
//       private router: Router,
//       private authenticationService: AuthenticationService
//   ) { 
//       // redirect to home if already logged in
//       if (this.authenticationService.currentUserValue) { 
//           this.router.navigate(['/']);
//       }
//   }


//   ngOnInit() {
//       this.loginForm = this.formBuilder.group({
//           username: ['', Validators.required],
//           password: ['', Validators.required]
//       });

//       // get return url from route parameters or default to '/'
//       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }

//   // convenience getter for easy access to form fields
//   get f() { return this.loginForm.controls; }

//   onSubmit() {
//       this.submitted = true;

//       // stop here if form is invalid
//       if (this.loginForm.invalid) {
//           return;
//       }

//       this.loading = true;
//       this.authenticationService.login(this.f['username'].value, this.f['password'].value)
//           .pipe(first())
//           .subscribe(
//               data => {
//                   this.router.navigate(['/home']);
//               },
//               error => {
//                   this.error = error.message;;
//                   this.loading = false;
//               });
//   }

//   checkRequiredValidation(control: string) {
//     return this.f[control].errors?.['required'];
//   }

loginForm: FormGroup = this._formBuilder.group({});

  submitted = false;

  error = '';
  returnUrl: string = '/';

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private route: ActivatedRoute,
  ) { // redirect to home if already logged in
    if (this._authenticationService.currentUserValue) { 
        this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {

    // initialise the form fields

    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
 // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
    return this.f[control].errors?.['username'];
  }


  checkMinValidation(control: string) {
    return this.f[control].errors?.['minlength'];
  }


  onSubmit() {
    debugger
    this.error = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.error = 'Invalid Entry'
      return;
    }

    // make API call and login the user
    this._authenticationService.login(this.f['username'].value, this.f['password'].value)
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
