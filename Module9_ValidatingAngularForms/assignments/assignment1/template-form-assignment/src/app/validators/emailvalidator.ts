import { AbstractControl, ValidatorFn } from "@angular/forms";


export function validateEmail(): ValidatorFn {
    //debugger
    return (control: AbstractControl) => {

        if (control.value != null && control.value !== '') {

            let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
            if (isValid) {
              return null;
            } else {
              return {
                appEmail: { valid: false }
              };
            }
          } else {
            return null;
        }
    }
}