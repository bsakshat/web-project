import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  infos: any;

  constructor(private service: SurveyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllSurveys().subscribe((infos: any) => {
      this.infos = infos;
    })
  }

}
