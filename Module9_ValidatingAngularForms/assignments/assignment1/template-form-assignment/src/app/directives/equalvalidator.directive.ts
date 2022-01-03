import { Attribute, Directive, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateNotEqual][formControlName],[validateNotEqual][formControl],[validateNotEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, 
          useExisting: forwardRef(() => EqualvalidatorDirective), 
          multi: true
        }
    ]
})
export class EqualvalidatorDirective {


  constructor(  @Attribute('validateNotEqual') public validateNotEqual: string,
  @Attribute('reverse') public reverse: string) {}
    private get isReverse() {
       if (!this.reverse) return false;
       return this.reverse === 'true' ? true: false;
    }
    validate(c: FormControl): { [key: string]: any } {
      //debugger
      // self value
      let v = c.value;
      if (c) {
        console.log('c.value is'+ v);
      }
      // control value
      let e = c.root.get(this.validateNotEqual);
      let pvalue = e?.value
      // value not equal
      if (e) {
        console.log('e.value is'+ e.value);
      }

      return ( v == pvalue)? {"validateNotEqual": false} : {"validateNotEqual": true};
    
    }

}
