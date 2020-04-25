import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component'
import { ResultsComponent } from './results/results.component'
import { SurveyinfoComponent } from './surveyinfo/surveyinfo.component';

const routes: Routes = [
  //{ path:'', redirectTo: '/', pathMatch:"full"},
  { path: 'survey', component: StudentComponent}, 
  { path: 'results', component: ResultsComponent},
  { path: 'results/:id', component: SurveyinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
