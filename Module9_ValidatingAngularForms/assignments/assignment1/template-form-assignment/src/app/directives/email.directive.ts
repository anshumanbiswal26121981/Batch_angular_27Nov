import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { validateEmail } from '../validators/emailvalidator';

@Directive({
  selector: '[appEmail]][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective {

  validator: ValidatorFn

  constructor() {    
    this.validator = validateEmail();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }

}
