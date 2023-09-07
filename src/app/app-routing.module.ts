import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ExternalComponent } from './external/external.component';



const routes: Routes = [
  {path:'',component: AppComponent,pathMatch:'full'},
  {path:'Home',component: HomeComponent},
  
  {path:'Course',component: CourseComponent,canActivate:[authGuard]},
  {path:'Login',component: LoginComponent},

  {path:'External',component: ExternalComponent},

  {path:'Home/:id',component: HomeComponent,
  children: [    // nested routes
    {path:'',redirectTo:'LoginComponent',pathMatch:'full'}, // default path
    {path:'Login',component: LoginComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
