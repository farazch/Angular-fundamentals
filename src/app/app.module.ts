import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { CourseService } from './course/courseService';
import { FormsModule } from '@angular/forms';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { counterReducer } from './shared/store/counter.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModel } from './Material.Module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    ReactiveformComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    StoreModule.forRoot({
      counter:counterReducer
    }),
    BrowserAnimationsModule,
    MaterialModel,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    CourseService,
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ], // we need to register dependencies that components in this modules are dependant upon
  bootstrap: [AppComponent]
})
export class AppModule { }
