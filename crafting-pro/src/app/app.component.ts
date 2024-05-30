import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StudentModule } from './student/student.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crafting-proo';
  heading = 'this is heading i am property binded'

}
