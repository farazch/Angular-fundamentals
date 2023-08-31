import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { of } from 'rxjs';
import { Subscriber } from 'rxjs';
import { Pipe } from '@angular/core';
import { filter } from 'rxjs';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'hello-world';
  author = 'faraz';

  eventBindingTitle : string = "Sample Title";
  twoWayBindingTitle : string = "Two way binding title to explain the term";

  headings = ['hh1','hh2','hh3'];

  public show:boolean = true;
  public buttonName:any = 'Hide';

  



  //public squaredNums = squareValues(nums);
  /*
  of('faraz','is','learning').subscribe({
    next: value=>console.log(value),
    error: err=>console.log(err),

  })
  */

  constructor(public _testService: TestService) {

    localStorage.setItem("isloggedin","false");

  }

  addHeading(newHeading:string){
    this.headings.push(newHeading);

  }

  ngOnInit(): void {

    of(2,4).subscribe(
      item=>console.log(`resulting item ... ${item}`),
      err=>console.log(`error occured ... ${err}`),
      () => console.log("Completed")
    );
    

    from([110,112]).subscribe(
      item=>console.log(`resulting item ... ${item}`),
      err=>console.log(`error occured ... ${err}`),
      () => console.log("Completed")
    );

  }

  ngAfterViewInit(): void {
    
  }

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  onEnter(event: any) { 
    console.log('Enter key pressed');
    console.log('Event object:', event.target.value);
    this.eventBindingTitle = event.target.value;
    console.log('Updated Value:'+this.eventBindingTitle);
  }

}


