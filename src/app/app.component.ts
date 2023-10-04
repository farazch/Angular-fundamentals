import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { firstValueFrom, of } from 'rxjs';
import { Subscriber } from 'rxjs';
import { Pipe } from '@angular/core';
import { filter } from 'rxjs';
import { map } from 'rxjs';
import { Observable,mergeMap } from 'rxjs';
import { from } from 'rxjs';
import { interval } from 'rxjs';

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

  // Example 1 
  ff$ = of(1,4,5,6).pipe(filter((item) => item>4)).subscribe(out => console.log("OUT:",out)); 

  // Example 2
  ff2$ = from([11,14,15,16]).pipe(filter((item) => item > 10)).subscribe(out => console.log("OUT:",out)); 





 // Example 3


  //public squaredNums = squareValues(nums);
  /*
  of('faraz','is','learning').subscribe({
    next: value=>console.log(value),
    error: err=>console.log(err),

  })
  */


  constructor(public _testService: TestService) {
    localStorage.setItem("isloggedin","false");
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    srcObservable.pipe(
      mergeMap( val => {
        console.log('Source value '+val)
        console.log('starting new observable')
        return innerObservable
      })
    )
    .subscribe(ret=> {
      console.log('Recd ' + ret);
    })
    // output = 
    /*
    Source value 1
    starting new observable
    Recd A
    Recd B
    Recd C
    Recd D
    Source value 2
    starting new observable
    Recd A
    Recd B
    Recd C
    Recd D
    Source value 3
    Recd A
    Recd B
    Recd C
    Recd D
    Source value 4

    */

  }

  addHeading(newHeading:string){
    this.headings.push(newHeading);

  }


  getData(data:string){

  
  }


  ngOnInit(): void {

    data$: Observable<number>;
    data$ : of(7,8);

    //material$ = of('video','cd');
    /*
    material$.subscribe(res => {
      console.log(res);
    });
    */

    /*
    data$.pipe(map(x=>x+10){
    }).subscribe();
    */

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
    console.log("In ngoninit");
    this.execute();
    

  }


  async  execute(){
    const source$ = interval(2000);

    

    console.log(`source is: ${source$}`);
    
    const firstValue =  firstValueFrom(source$);
    console.log(`First number is: ${firstValue}`);
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


