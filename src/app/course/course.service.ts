
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })


export class CourseService {
    getCourseTopics(){
        return ["Inheritance","Polymorphism"];
    }
}