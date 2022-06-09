import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EditfacultyComponent } from '../editfaculty/editfaculty.component';
import { AddfacultyComponent } from '../addfaculty/addfaculty.component';
import { FacultyComponent } from './faculty.component';
import { FacultyListComponent } from '../faculty-list/faculty-list.component';

// import {MatTableModule} from '@angular/material/table';


const routes: Routes = [
  { path: 'faculty', redirectTo: 'faculty', pathMatch: 'full' },
  {
    path: '', component: FacultyComponent, children: [
      { path: 'addFaculty', component: AddfacultyComponent },
      { path: 'editFaculty', component: EditfacultyComponent },
      {path:'list',component:FacultyListComponent},

    ]
  }
]

@NgModule({
  declarations: [
    FacultyComponent,
    AddfacultyComponent,
    EditfacultyComponent,
  ],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),

  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FacultyModule { 
  constructor(){
    console.log('faculty--')
  }
}
