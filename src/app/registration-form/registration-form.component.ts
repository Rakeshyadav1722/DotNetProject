import { Component, OnInit } from '@angular/core';
//import { Registartion } from '../Registration';
//import { User } from '../shared/user.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  RegisterUser(item:any){
    console.warn(item);
  }
  ngOnInit(): void {
    
  }
  
}
   