import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { TeachersComponent } from '../pages/teachers/teachers.component';
import { StudentsComponent } from '../pages/students/students.component';
import { CharactersComponent } from '../pages/characters/characters.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'students', component: StudentsComponent },
];

@NgModule({
  declarations: [TeachersComponent,CharactersComponent,StudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[]
})
export class PagesModule { }
