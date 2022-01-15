import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable, of as observableOf, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ToastService } from '../../../services/toast.service';
import { UserService } from '../../../services/user.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends BaseComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({});
  existinUser: Params | undefined ;
  isNewForm: Observable<Boolean> | undefined;
  unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder,
    private toastService: ToastService) {
    super();
    // if (this.router.getCurrentNavigation() !== null) {
    //   this.existinUser = this.router.getCurrentNavigation().extras.queryParams;
    // }
   
  }

  ngOnInit() {
    this.isNewForm = observableOf(true);
    
    if (this.existinUser) {
      this.form = this.formBuilder.group({
        id: [this.existinUser.id],
        password: ['', [
          Validators.required,
          Validators.minLength(8)
        ]],
        confirmPassword: ['', [
          Validators.required,
          Validators.minLength(8)
        ]]
      });
    }
    
  }

  isFieldInvalid(field: string) {
    if (this.form) {
      return (this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched));
    } else {
      return false;
    }
    
  }

  onSubmit() {
    if (this.form) {
      if (this.form.value.password !== this.form.value.confirmPassword) {
        this.toastService.openSnackBar("Password entered do not match!", '', 'error-snackbar');
        return;
      }

      this.userService.updateUser(this.form.value).pipe(takeUntil(this.unsubscribe)).subscribe();
      this.isNewForm = observableOf(false);
    }
  }
}