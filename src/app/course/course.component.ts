import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CourseService } from './courseService';
import { Input,Output,EventEmitter } from "@angular/core";
import { TestService } from '../test.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseTitle = "OOPS";
  courseContent;

  @Input() author = "";
  @Output() newParentData = new EventEmitter<string>();

  constructor(courses:CourseService,public _testService: TestService,private store:Store<{counter:{counter:number}}>){
    //let courseContent = courses.getCourseTopics();
    this.courseContent = courses.getCourseTopics();  
  }

  counterDisplay!: number;
  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter;

    })
  }


  newHeading(value:string){
    this.newParentData.emit(value);
  }




}
