import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Input,Output,EventEmitter } from "@angular/core";
import { TestService } from '../test.service';
import { Store } from '@ngrx/store';

import { HttpClient } from '@angular/common/http';

interface Styles {
  fontSize: string;
  color: string;
  decoration?:string;
  hover?:boolean;
}


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  

  courseTitle = "OOPS";
  courseContent;
  storageLoggedin:any = "";

  serverdata : any = '';

  @Input() author = "";
  @Output() newParentData = new EventEmitter<string>();

  @Input() inlineStyle: Styles | undefined;
  //hoverUnderline:boolean;


  constructor(private http: HttpClient,courses:CourseService,public _testService: TestService,private store:Store<{counter:{counter:number}}>){
    //this.isHovered = this.inlineStyle?.hover;
    //let courseContent = courses.getCourseTopics();
    this.courseContent = courses.getCourseTopics();  
    this.storageLoggedin = localStorage.getItem("isloggedin");
    //console.log("In course component: ",localStorage.getItem("isloggedin"));
  }

  counterDisplay!: number;
  ngOnInit(): void { 
    console.log("inlineStyle:::",this.inlineStyle?.hover);
    //this.hoverUnderline = this.inlineStyle?.hover;

    this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter;
    })
  }

  newHeading(value:string){
    this.newParentData.emit(value);
  }

  makeRequest() {
    console.log("Her");

    //https://reqres.in/api/users

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      console.log('Response:', response);
      this.serverdata = response;
    });
  }

  onMouseEnter() {
    //this.isHovered = true;
  }
}
