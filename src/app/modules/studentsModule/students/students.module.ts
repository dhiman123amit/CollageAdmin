import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { StudentsListComponent } from '../students-list/students-list.component';
const routes: Routes = [
  { path: 'student', redirectTo: 'student', pathMatch: 'full' },
  {
    path: '', component: StudentsComponent, children: [
      { path: 'addStudent', component: AddStudentComponent },
      { path: 'editStudent', component: EditStudentComponent },
      {path:'list',component:StudentsListComponent}

    ]
  }
]



@NgModule({
  declarations: [
    StudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentsModule { }
