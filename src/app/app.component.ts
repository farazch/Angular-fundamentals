import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

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


  constructor(public _testService: TestService) {}

  addHeading(newHeading:string){
    this.headings.push(newHeading);

  }

  ngOnInit(): void {
    
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


