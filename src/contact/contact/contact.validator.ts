import { Directive, forwardRef } from "@angular/core";
import {
  NG_VALIDATORS,
  AbstractControl,
  ValidatorFn,
  Validator,
  FormControl
} from "@angular/forms";

// validation function
function validateFieldFactory(): ValidatorFn {
  return (c: AbstractControl) => {
    let isValid = c.value === "http://www.xphera.co";

    if (isValid) {
      return null;
    } else {
      return {
        supererror: {
          valid: false,
          expected: 'http://www.xphera.co' //se colocan los campos que sean necesarios
        }
      };
    }
  };
}





// validation function
function validateXphrUrlFactory(): ValidatorFn {
  return (c: AbstractControl) => {
    const isValid = c.value === "http://www.xphera.com";

    if (isValid) {
      return null;
    } else {
      return {
        xphrUrl: {
          valid: false,
          expected: 'http://www.xphera.com' //se colocan los campos que sean necesarios
        }
      };
    }
  };
}




@Directive({
  selector: "[jurName][ngModel]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: JuriNameValidator, multi: true }
  ]
})
export class JuriNameValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = validateFieldFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}




@Directive({
  selector: "[xphrUrl][ngModel]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: XphrUrlValidator, multi: true }
  ]
})
export class XphrUrlValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = validateXphrUrlFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
