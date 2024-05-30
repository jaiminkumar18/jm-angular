import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  standalone: false,
  // imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  // property binding
  adds = "Add Student Data"
  classList = "student"
  myId = "stud"

  // button clicked evenet
  buttonClick(e:any) {
    console.log(e)
    alert("Button Clicked")
  }

  // mouse over event
  mouseOver = false;
  mouseOverHandler(e:MouseEvent) {
    console.log(e);
    this.mouseOver = true;
    // alert("Mouse Over")
  }

  mouseOutHandler(e:MouseEvent) {
    console.log(e);
    this.mouseOver = false;
    // alert("Mouse Out")
  }

  // form submit

}
