import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[customMin][formControlName],[customMin][formControl],[customMin][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinnumberDirective, multi: true}]
})
export class MinnumberDirective implements Validator {
  @Input()
  customMin: string = "1";
  
  validate(control: FormControl): {[key: string]: any} {

      if (control.value !== null && control.value.length !== undefined && (isNaN(control.value.length) || control.value.length < this.customMin)) {
        return { 'customMin': true };
    }
    return {'customMin': false}  ;
  }
} 