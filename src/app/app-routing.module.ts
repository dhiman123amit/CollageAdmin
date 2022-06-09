import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path:'auth',loadChildren:()=>import('./modules/authModule/auth/auth.module').then(m=>m.AuthModule)},
  {path:'faculty',loadChildren:()=>import('./modules/facultyModule/faculty/faculty.module').then(m=>m.FacultyModule)},
  {path:'student',loadChildren:()=>import('./modules/studentsModule/students/students.module').then(m=>m.StudentsModule)},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
