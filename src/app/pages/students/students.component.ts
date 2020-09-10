import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {

  title : string = 'Estudiantes';

  constructor() { }

  ngOnInit(): void {
  }

}
