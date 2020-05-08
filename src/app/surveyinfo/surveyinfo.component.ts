import { Component, OnInit } from '@angular/core';
import { Surveydata } from '../surveydata';
import { SurveyService } from '../survey.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-surveyinfo',
  templateUrl: './surveyinfo.component.html',
  styleUrls: ['./surveyinfo.component.css']
})
export class SurveyinfoComponent implements OnInit {

  survey: Surveydata = new Surveydata();
  id: number;

  constructor(private route: ActivatedRoute, private service: SurveyService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getSurvey(this.id).subscribe((received: any) => {
        this.survey = received.body;
      });
    });
      
  }

}
