import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  login(userid:string,password:string){
    if(userid == 'ch' && password == '123'){
      localStorage.setItem("isloggedin","true");
    }
    else
      localStorage.setItem("isloggedin","false");

  }

}
