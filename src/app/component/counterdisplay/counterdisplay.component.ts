import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit {

  constructor(private store:Store<{counter:{counter:number}}>,public store2:Store<AppState>){
    
  }

  counterDisplay!: number;
  totalDisplay!: number;
  
  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter;
    })

    // this.store2.subscribe(dat => {
    //   console.log("DAT:",dat);
    // })

    // this.store2.select$.subscribe(value => {
    //   this.intValue = value;
    // });

this.store
.subscribe(state => console.log("STATE:",state.counter) )


    //const totalDisplay = this.store2.select('total');
    //console.log("DAT::",totalDisplay);
    //this.store2.select('total').subscribe(dat=>{
      //console.log("DAT::",dat);
      //this.totalDisplay = dat.total;
    //})
  }

}
