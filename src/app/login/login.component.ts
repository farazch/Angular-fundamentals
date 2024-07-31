import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  
constructor(private router: Router){
console.log("router urL:",this.router.url);
}

  login(userid:string,password:string){
    if(userid == 'ch' && password == '123'){
      localStorage.setItem("isloggedin","true");
    }
    else
      localStorage.setItem("isloggedin","false");

  }

}
