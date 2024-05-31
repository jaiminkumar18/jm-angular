import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StudentModule } from './student/student.module';
import { AddStudentComponent } from './student/add-student/add-student.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,StudentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crafting-proo';
  heading = 'this is heading i am property binded'


  // Pipes
  head = 'HELLO I AM PIPE'
  // 1.date pipes
  currentDate = new Date();

  // 1.uppercase pipes
  name = 'This is JAI';

  // 2.uppercase pipes
  name1 = 'This is JAI';

  // 3.uppercase pipes
  name2 = 'This is JAI';

  // 4.currancy pipes
  price = 1000;

  // 5.Decimal pipes
  value = 1000.123456789;

  // 6.Percent pipes
  percent = 0.25;

  // 7.Slice Pipe
  str = 'Hello World';

  // 8.Array Pipe
  arr = [1, 2, 3, 4, 5];

}
