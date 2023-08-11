import { Component } from '@angular/core';
import { CourseService } from './courseService';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courseTitle = "OOPS";
  courseContent;

  constructor(courses:CourseService){
    //let courseContent = courses.getCourseTopics();
    this.courseContent = courses.getCourseTopics();
  }

}
