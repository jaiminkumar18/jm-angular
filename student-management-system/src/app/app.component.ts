import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StudentModule } from './student/student.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,StudentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student-management-system';
  head = 'Student Management System'

  
  a = 5
  b = 8
isRed: any;

  getFullName() {
    return 'Jaimin Sonawane'
  }

  //* Property Binding
  imgUrl:string = "C:/Users/jaimi/Downloads/Jai.png"
  h1Title = "This is Heading"

  //* Event Binding
  buttonClick(e:any) {
    alert('Button Clicked')
  }
  
  ifMouseOver=false;
  mouseOver(e:any){
    // alert('Mouse Over')
    console.log('Mouse Over')
    this.ifMouseOver = true
  }

 mouseOut(e:any){
  this.ifMouseOver = false
 }

//* *ngFor  
// 	Repeat a node for each item in a list.

studentList = [{
  name: "Jaimin",
  gender: "25",
  dob: "18/10/1999",
  percentage:80
},{
  name: "Jaimin",
  gender: "25",
  dob: "18/10/1999",
  percentage:60
},{
  name: "Jaimin",
  gender: "25",
  dob: "18/10/1999",
  percentage:90
}]

<<<<<<< HEAD
//* ngIf Directive
// 	Conditionally creates or disposes of subviews from the template.
hasPermission = false;
// hasPermission = true;
=======
//* ngIF
// Conditionaly creates or disposes of subviews from the template.
>>>>>>> ae3ec1dd6c3ad163e7ffd3cf6e402c18d89c4b47

// hasPermission = true;
hasPermission = false;

toggleHasPermission(e:any){
  this.hasPermission = !this.hasPermission
}

<<<<<<< HEAD
viewMode = 'map'

// age = 17

// Other example of ngSwitch
age: number = 20;  // Initial age value

  ageCategory(age: number): string {
    return age >= 18 ? 'adult' : 'minor';
  }


  //* NgModel
  student = {
  userName:'jai',
  dob:18/10/1999,
  email:'jai@gmail.com',
  mob:123456789
 }

//* NgClass
bgColor = 22;


//* NgStyle
  canSave = true;
  isSpecial = true;
  isUnchanged = true;
  isActive = true;

  currentStyles: Record<string, string> = {};

setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '24px' : '12px',
  };
}

color = 'isRed';

student1 = {
  title:"abc",
  name:"Smith Watson",
  mobile:"1234567890",
  email:"smith.watson@gmail.com"
}


=======
items = ['apple','banana','watermelon']

viewMode = 'map'
>>>>>>> ae3ec1dd6c3ad163e7ffd3cf6e402c18d89c4b47

}


