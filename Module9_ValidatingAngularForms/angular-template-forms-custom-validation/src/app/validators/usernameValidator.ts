import { AbstractControl, ValidatorFn } from "@angular/forms";

//logic to validate the username will be written here

export function validateUserName(): ValidatorFn {
    debugger;
    return (c: AbstractControl) => {
        //logic to validate the username

        const isValid = c.value.toString().includes('amazon');
        if (isValid) {
            return null;
        }

        return {
            userName: {
                valid:false
            }
        }
    }
}

