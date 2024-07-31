import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment,decrement,reset, incrementtenn,setInitialValue,disableInitial } from 'src/app/shared/store/counter.actions';
//import { isloadingSelector } from 'src/app/shared/store/selectors';
import { Observable,of } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appStates.interface';
import { selectInitialCounter,selectDisableInitial } from 'src/app/shared/store/selectors';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent implements OnInit {

  initialCounter$: Observable<number>;
  disableInitial$: Observable<boolean>;

  constructor(private store:Store<AppStateInterface> ){
    this.initialCounter$ = of(0);   
    this.disableInitial$ = of(true);
    //this.isLoading$ = this.store.pipe(select(isloadingSelector));

  }
  constantValue: boolean = false;

  ngOnInit(): void {

    this.initialCounter$ = this.store.pipe(select(selectInitialCounter));
    this.initialCounter$.subscribe(res => console.log("RREESS:",res));

    this.disableInitial$ = this.store.pipe(select(selectDisableInitial));
    
    this.disableInitial$.subscribe((value) => (
      this.constantValue = value));
    




    console.log("di:",this.constantValue);
    this.store.dispatch(setInitialValue({value:15}));
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

  disableInitial(){
    this.store.dispatch(disableInitial({value:true}));
  }

}
