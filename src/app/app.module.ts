import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { CourseService } from './course/course.service';
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
import { ExternalComponent } from './external/external.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';



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
    ExternalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatDialogModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  
    
    StoreModule.forRoot({
      counter:counterReducer
      
    }),


    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      
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
