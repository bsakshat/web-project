import { Component, OnInit } from '@angular/core';
import { Surveydata } from '../surveydata';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  like = [];
  submitted = false;
  data: Surveydata = new Surveydata();

  constructor(private service: SurveyService, private router: Router) { }

  ngOnInit(): void {
  }

  onLikes(event, check) {
    if (event.target.checked) {
      this.like.push(check);
    }
    if (!event.target.checked) {
      let index = this.like.indexOf(check);
      if (index > -1) {
        this.like.splice(index, 1);
      }
    }
  }

  assignData() {
    this.data.likes = this.data.likes ? this.data.likes : "";
    this.data.interest = this.data.interest ? this.data.interest : "";
    this.data.recom = this.data.recom ? this.data.recom : "";
  }

  validate() {
    if (!this.data.first || !this.data.last || !this.data.address || !this.data.city || !this.data.state || !this.data.zipcode || !this.data.phone || !this.data.email || !this.data.tdate) {
      console.log('Input the required values.');
      return false;
    }
    return true;
  }

  reset(form: NgForm) {
    form.resetForm();
    this.submitted = false;
  }

  onSubmit() {
    this.assignData();
    if (!this.validate()) {
      return;
    }
    this.data.likes = this.like.join();
    this.service.addSurvey(this.data).subscribe(()=>{
      console.log("Survey record added");
    });
    this.submitted = true;
  }

}
