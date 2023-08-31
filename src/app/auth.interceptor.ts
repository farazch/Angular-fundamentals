import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'test1234';
   // console.log("REQ IN INTERCEPTOR:",request);
    
   
   const req = request.clone({
      setHeaders:{
        API_KEY,
      }

    })
    
    //return next.handle(request);
    return next.handle(req);
  }
}
