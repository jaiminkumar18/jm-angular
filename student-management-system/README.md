# StudentManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


<!--* Notes -->
<!--** created new SMS project using = ng new student-management system -->

//@Component:
<!--*Ha component ek class jo paryant tyala @component navacha decorator lagat nh toparyant.-->
<!--*Component chya aat asto tya data la metadata ashe mhnto. -->
<!--*  -->

@Component({
  selector: 'app-root', <!--*Jehva pn ha component use kraycha asel teha  apn ha selector use krnar HTML madhe -->
  standalone: true, <!--*Ha component ekta ahe yala konachi grj nh kinhva to kontya dusrya component vr depend nh -->
  imports: [RouterOutlet],<!--*jehva pn new component bnvnar tyala aplyla ethe import krav lagel tya shivay to RUN honar nh  -->
  templateUrl: './app.component.html',<!--*HTML PATH  -->
  styleUrl: './app.component.scss'<!--*CSS PATH  -->
})
export class AppComponent {
  title = 'student-management-system';
}