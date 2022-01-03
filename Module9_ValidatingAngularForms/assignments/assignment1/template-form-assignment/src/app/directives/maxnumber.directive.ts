import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[customMax][formControlName],[customMax][formControl],[customMax][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxnumberDirective, multi: true}]
})
export class MaxnumberDirective {

  @Input()
  customMax: string="50";
  
  validate(c: FormControl): {[key: string]: any} {
      if (c.value !== null) {
        let v = c.value.length;
        return ( v > this.customMax)? {"customMax": true} : {"customMax": false};
      }

      return {"customMax": null};
  }

}
