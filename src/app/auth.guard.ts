import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  let _router = inject(Router);

  let issloggedId = localStorage.getItem("isloggedin");
  console.log("issloggedId::",issloggedId);
  /*
  
  if(issloggedId == 'false')
  {
    alert("Not authenticated user");
    _router.navigate(['Login']);
    return false;
  }
  */  
  return true;
};
