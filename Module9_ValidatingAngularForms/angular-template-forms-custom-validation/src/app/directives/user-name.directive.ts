import { Directive } from '@angular/core';
import { FormControl, Validator, ValidatorFn, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { validateUserName } from '../validators/usernameValidator';

@Directive({
  selector: '[userName][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UserNameDirective,
    multi: true
  }]
})
export class UserNameDirective implements Validator{

  validator: ValidatorFn

  constructor() {    
    this.validator = validateUserName();
  }
  
  validate(c: FormControl) {
    return this.validator(c );
  }
}
