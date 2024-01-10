import { Component } from '@angular/core';
//import { User } from '../interfaces/user';
import { User } from '../interfaces/user';
import { ExternalService } from './external.service';
import { filter } from 'rxjs';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


// if i user api endpoint as API_URL in service then it need to b accessed with userData.results
/* if i user api endpoint as https://jsonplaceholder.typicode.com/users or any other in service 
then it need to b accessed with userData
*/

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
 //templateUrl: : './external.component.html',

export class ExternalComponent {
  public result : any[] = [];
  //user!: User[];
  //user: User[] = [];
  public user:User[] = [];
  //public userr: [];
  
  userData: any;

  public testUser : User[] = [];

  public paramId : string | null = '';

  
  //usero : Observable<User[]>;

 
  constructor(public userService: ExternalService,public route: ActivatedRoute) { }

  ngOnInit(): void {

    // below working
    this.userService.getUser()
      .subscribe(
        (dataa) => {
          this.user = dataa;
        },
        //error => alert(JSON.stringify(error))
      );

      this.paramId = this.route.snapshot.paramMap.get('id');
      
  }


//  getusreo(){
//    this.usero = this.userService.getUserO();
//  }

  


  returnNumbersObservable(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6);
  }
 
  transformNumbers() { console.log("Here1");
   this.returnNumbersObservable().pipe(
     filter(n => n % 2 === 0),
     map(n => n * 2),
   )
   .subscribe(result => console.log("FFG:",result));


   this.transformNumbers();
  } 





}
