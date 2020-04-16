import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component'
import { ResultsComponent } from './results/results.component'

const routes: Routes = [
  { path: 'survey', component: StudentComponent}, 
  { path: 'results', component: ResultsComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
