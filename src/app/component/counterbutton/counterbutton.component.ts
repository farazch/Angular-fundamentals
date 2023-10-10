import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment,decrement,reset, incrementtenn } from 'src/app/shared/store/counter.actions';
import { isloadingSelector } from 'src/app/shared/store/selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appStates.interface';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  isLoading$: Observable<boolean>;

  constructor(private store:Store<AppStateInterface> ){
      
    this.isLoading$ = this.store.pipe(select(isloadingSelector));

  }


  OnIncrement(){

    this.store.dispatch(increment());
  }

  OnDecrement(){
    this.store.dispatch(decrement());
    
  }

  OnReset(){
    this.store.dispatch(reset());
    
  }

  OnIncrementTen() {
    this.store.dispatch(incrementtenn({value:30}));

  }

}
