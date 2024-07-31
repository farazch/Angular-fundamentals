import { Injectable } from "@angular/core";
// import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { increment,decrement,reset,incrementtenn,setInitialValue,disableInitial,setText } from "./counter.actions";
import { CoursesService } from "src/app/courses.service";

@Injectable()
export class CountersEffect{

constructor(private action$: Actions,private courses:CoursesService){

}

// loadItems$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(setText),
//       mergeMap(() =>
//         this.courses.getCoursesStruct().pipe(
//           map(items => loadItemsSuccess({ items })),
          
//         )
//       )
//     )
//   );

}