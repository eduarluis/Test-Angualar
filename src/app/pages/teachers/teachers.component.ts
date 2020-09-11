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
  
  title : string = 'Profesores';

  // Variable para almacenar los profesores
  teachers : Teachers; 

  constructor(
    public teacherService : TeachersService
  ) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  /**
  * 
  * getTeacher()
  * Trae el listado de todos los profesores, para mostrarlos en pantalla
  * 
  */
  getTeacher()
  {
    this.teacherService.GetAllTeachers()
    .then((res: any) => {
      let data = res;

      let newObj:any = [];
      for (let i = 0; i < data.length; i++) {        
        let age = this.age(data[i].dateOfBirth);
        data[i].dateOfBirth = age;

        (data[i].patronus === '') ? 'sin patronus' : data[i].patronus;
        (data[i].dateOfBirth === 'NaN') ? 'sin edad' : data[i].dateOfBirth;

        newObj.push(data[i]);
        this.teachers = newObj;
      }
      console.log(this.teachers);
    })
    .catch(err => console.log(err));
  }

  /**
   * 
   * @param birthdate Edad
   * calcular la edad del profesor
   */
  age = birthdate => {
    let date : any = new Date(birthdate);
    let dateNow : any = new Date();
    return Math.floor(((dateNow - date) / (1000 * 60 * 60 * 24 ) / 365));
  }
}
