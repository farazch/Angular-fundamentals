import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({

    selector:'courses',
    template:`
        <h1>List of Courses<br> {{ title }}</h1>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        `
    })

export class CoursesComponent {
    title= "List of Titles";
    courses;
    
    constructor(service:CoursesService){
        //let service = new CoursesService();
        this.courses = service.getCourses();  
    }

}