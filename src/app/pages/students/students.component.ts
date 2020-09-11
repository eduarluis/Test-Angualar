import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent {

  title : string = 'Estudiantes';

  constructor() { }

  ngOnInit(): void {
  }

}
