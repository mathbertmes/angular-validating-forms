import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-built-in-validator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './built-in-validator.component.html',
  styleUrls: ['./built-in-validator.component.css'] // Corrigido para 'styleUrls'
})
export class BuiltInValidatorComponent{
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  },
  [this.matching("password", "confirmPassword")]
);

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get confirmPassword() {
    return this.form.controls['confirmPassword'];
  }

  matching(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
        const control = controls.get(controlName);
        const checkControl = controls.get(checkControlName);
        if(control === null) return null;
        if(checkControl === null) return null;
        if (control.value !== checkControl.value) {
            checkControl.setErrors({ matching: true });
            return { matching: true };
        }
        return null;
    };
}
}
