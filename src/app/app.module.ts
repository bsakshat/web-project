import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ResultsComponent } from './results/results.component';
import { SurveyinfoComponent } from './surveyinfo/surveyinfo.component';
import { SurveyService } from './survey.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ResultsComponent,
    SurveyinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
