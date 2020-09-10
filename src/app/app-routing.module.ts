import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// // Pages
// import { TeachersComponent } from './pages/teachers/teachers.component';
// import { StudentsComponent } from './pages/students/students.component';
// import { CharactersComponent } from './pages/characters/characters.component';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
  },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
