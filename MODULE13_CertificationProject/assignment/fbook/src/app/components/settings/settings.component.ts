import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from '../base/base.component';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { UtilityService } from '../../services/utility.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent extends BaseComponent implements OnInit {
  cities: string[] = ['Bhopal', 'Lucknow', 'Mumbai', 'Jaipur', 'Panji', 'Ranchi'];
  states: string[] = ['MP', 'UP', 'MH', 'RJ', 'GA', 'JK'];
  countries: string[] = ['India'];
  isLoading = true;
  form: FormGroup = this.formBuilder.group({})
  activeUserObject: any;
  unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private utility: UtilityService) {
    super();
    let currentUserVar = localStorage.getItem('currentUser');
    if (currentUserVar) {
      this.activeUserObject = JSON.parse(currentUserVar);
    }
   
  }

  ngOnInit() {
    this.userService.getUserById(this.activeUserObject._id).pipe(takeUntil(this.unsubscribe)).subscribe((currentUser: null | undefined) => {
      if (currentUser !== null && currentUser !== undefined) {
        this.createUserForm(currentUser);
        this.isLoading = false;
      }
    });
  }

  createUserForm(currentUser: any) {
    this.form = this.formBuilder.group({
      id: [currentUser.id],
      firstName: [currentUser.firstName, Validators.required],
      lastName: [currentUser.lastName, Validators.required],
      dob: [{ value: this.utility.convertDateFormat(currentUser.dob), disabled: true }],
      gender: [{ value: currentUser.gender, disabled: true }],
      email: [{ value: currentUser.email, disabled: true }],
      phone: [currentUser.phone, Validators.required],
      country: [currentUser.country, Validators.required],
      state: [currentUser.state, Validators.required],
      city: [currentUser.city, Validators.required],
      pincode: [currentUser.pincode, Validators.required],
      profession: [currentUser.profession, Validators.required],
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

  isFieldInvalid(field: string) {
    if (this.form) {
      return (this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched));
    }
    return false;
  }

  changePassword() {
    if (this.form) {
      if (this.form.value.password === undefined || this.form.value.password === '' || (this.form.value.password).length !== 8) {
        this.toastService.openSnackBar("Please enter 8 character password!", '', 'error-snackbar');
        return;
      }
  
      if (this.form.value.password !== this.form.value.confirmPassword) {
        this.toastService.openSnackBar("Password entered do not match!", '', 'error-snackbar');
        return;
      }
  
      this.userService.updateUser(this.form.value).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
        this.ngOnInit();
      });
    }
  }

  onSubmit() {
    if (this.form) {
      let detailsToUpdate = {
        id: this.form.value.id,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        phone: this.form.value.phone,
        city: this.form.value.city,
        state: this.form.value.state,
        country: this.form.value.country,
        pincode: this.form.value.pincode,
        profession: this.form.value.profession
      };
      this.userService.updateUser(detailsToUpdate).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
        this.ngOnInit();
      });
    }
   
  }
}