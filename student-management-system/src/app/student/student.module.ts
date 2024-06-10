import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { DeleteStudentComponent } from './component/delete-student/delete-student.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { ViewStudentComponent } from './component/view-student/view-student.component';



@NgModule({
  declarations: [AddStudentComponent,
    DeleteStudentComponent,
    StudentListComponent,
    ViewStudentComponent],
  imports: [
    CommonModule
  ],

  //* We need export module also
  exports:[
    AddStudentComponent,
    DeleteStudentComponent,
    StudentListComponent,
    ViewStudentComponent
  ]
})
export class StudentModule { }
