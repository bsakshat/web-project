import { Component, OnInit } from '@angular/core';
import { Surveydata } from '../surveydata';
import { SurveyService } from '../survey.service'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  recoms = ['Very Likely', 'Likely', 'Unlikely']

  data: Surveydata;

  constructor(private service: SurveyService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addSurvey(this.data);
  }

}
