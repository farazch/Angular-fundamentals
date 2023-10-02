import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { UsersResult } from '../interfaces/user';
import { User } from '../interfaces/user';
import { API_URL } from '../interfaces/constants';
import { of } from 'rxjs';
import { Pipe } from '@angular/core';
import { map } from 'rxjs';
import { take } from 'rxjs';
import { delay } from 'rxjs';
import { filter } from 'rxjs';
import { of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor(private httpClient:HttpClient) {  }


  getUser(): Observable<User[]> {

/*
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      map(items => items.filter(i => i.id > 2)
      );
*/

    /*
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      delay(1000), take(1)
    );
    */  

      // working below
    /*  
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      map(res => {
        console.log('hello from pipe');
          return res;
      })
    );  // end of pipe
    */


    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');

  }

getUserO():Observable<User[]>{
  return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
}


}
