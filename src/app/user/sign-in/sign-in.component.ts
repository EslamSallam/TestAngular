import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bot-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = {email:'',password:''};
  
  constructor() { }
  SignIn(){

  }
}
