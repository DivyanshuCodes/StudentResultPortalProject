import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { StudentShowDetailsComponent } from './student-show-details/student-show-details.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'Login',component:LoginPageComponent},
  {path:'Teacher',component:TeacherComponent},
  {path:'Signup',component:SignupPageComponent},
  {path:'StudentPage',component:StudentComponent},
  {path:'StudentResult',component:StudentShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
