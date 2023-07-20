import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  submitted = false;
 
  constructor(private fb: FormBuilder, private router:Router) {
     this.myForm();
  }
  myForm() {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, 
       Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
    password:['',[Validators.required,Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    )]]
    });
 }
  ngOnInit(): void {
   this.myForm();
  }
 
  Login(){
    this.submitted= true;
    if(this.loginForm.invalid)
    {
      this.loginForm.setErrors({ ...this.loginForm.errors, 'email': true });
      this.loginForm.setErrors({ ...this.loginForm.errors, 'password': true });
    }
    else{
   // this.myForm();
    this.router.navigate(['/dashboard']);
    }
  }

}
