import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { CourseService } from './course/courseService';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    CourseService
  ], // we need to register dependencies that components in this modules are dependant upon
  bootstrap: [AppComponent]
})
export class AppModule { }
