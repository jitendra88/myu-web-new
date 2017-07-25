import { Component, OnInit } from '@angular/core';
import {AuthUser} from "../core/model/auth.model";
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
 // errors: Errors = new Errors();
  loginObject: AuthUser = {
    username: '',
    password: '',

  };

  constructor(private authService:AuthService) {

  }

  ngOnInit() {

  }

  userLogin(){
   this.authService.userLogin(this.loginObject)
     .subscribe(
       data=>alert(JSON.stringify(data)),
       err =>{
         alert(JSON.stringify(err));
       }

     )



  }

}
