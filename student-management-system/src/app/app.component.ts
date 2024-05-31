import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student-management-system';
  head = 'Student Management System'

  
  a = 5
  b = 8

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

studentList = [{
  name: "Jaimin",
  gender: "25",
  dob: "18/10/1999"
},{
  name: "Jaimin",
  gender: "25",
  dob: "18/10/1999"
},{
  name: "Jaimin",
  gender: "25",
  dob: "18/10/1999"
}]





}
