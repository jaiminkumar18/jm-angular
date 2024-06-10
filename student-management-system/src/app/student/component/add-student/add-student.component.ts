import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-student',
  // standalone: true,
  // imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  @Input() title:string = "";
  @Input() name:string = "";
  @Input() mobile:string = "";
  @Input() email:string = "";
}
