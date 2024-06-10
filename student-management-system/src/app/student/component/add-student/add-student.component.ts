import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  // standalone: true,
  // imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {

  //*@Input Decorator
  @Input() title:string = "";
  @Input() name:string = "";
  @Input() mobile:string = "";
  @Input() email:string = "";

  //*@Output Decorator
  @Output() buttonClicked = new EventEmitter<string>();
  
  buttonClickedHandler(ev:any){
    this.buttonClicked.emit('Button Clicked');
  }
  







}
