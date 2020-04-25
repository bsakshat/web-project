import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Surveydata } from './surveydata';
import { Observable } from 'rxjs';


const SURVEY_URL = environment.sUrl;

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(
    private httpClient: HttpClient) {    
   }

   public getSurvey(id: number): Observable<Surveydata> {
     return this.httpClient.get<Surveydata>(SURVEY_URL+ `/${id}`);
   }

   public addSurvey(surveydata: Surveydata) {
     let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
     let jsonData = JSON.stringify(surveydata);
     return this.httpClient.post<Surveydata>(SURVEY_URL + '/addSurvey', jsonData, options);
   }

   public getAllSurveys():Observable<any> {
     return this.httpClient.get<any>(SURVEY_URL);
   }
}
