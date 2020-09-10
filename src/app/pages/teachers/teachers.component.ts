import { Component } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';
import { Teachers } from '../../interfaces/index.interfaces';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styles: [
  ]
})
export class TeachersComponent{

  title : string = 'Profesores'

  teachers : Teachers;

  constructor(
    public teacherService : TeachersService
  ) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher()
  {
    this.teacherService.GetAllTeachers()
    .then((res) => {
      this.teachers = res;
      console.log(res)
    })
    .catch(err => console.log(err));
  }

}
