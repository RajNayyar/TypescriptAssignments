import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/app.product';
import { Logic } from '../../models/app.logic';
import { stringify } from 'querystring';
// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     let val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }
   static checkUnique(ctrl: AbstractControl) : any {
    let val: number = parseInt(ctrl.value)
    let logic = new Logic();
    if(logic.isUnique(val))
    {
      return {isNotUnique: false}
    }
    return {isNotUnique: true}
  }
  static checkFirstLetterUpperCase(ctrl: AbstractControl) : any {
    let val: string = ctrl.value
    if(val[0]===val[0].toUpperCase()){
      return {isNotUpperCase: false}
    }
    return {isNotUpperCase: true}
  }
}
