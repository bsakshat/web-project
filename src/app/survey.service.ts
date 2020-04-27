import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Surveydata } from './surveydata';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const SURVEY_URL = `http://35.221.47.160:31000/swe645-spr20-hw3`;

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(
    private httpClient: HttpClient) {    
   }

   public getSurvey(id: number): Observable<Surveydata> {
     return this.httpClient.get<Surveydata>(SURVEY_URL+ `/${id}`)
     .pipe(
       retry(3),
       catchError(this.handleError)
     );
   }

   public addSurvey(surveydata: Surveydata): Observable<Surveydata> {
     let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
     let jsonData = JSON.stringify(surveydata);
     return this.httpClient.post<Surveydata>(SURVEY_URL + `/addSurvey`, jsonData, options)
     .pipe(
      catchError(this.handleError)
      );
   }

   public getAllSurveys():Observable<any> {
     return this.httpClient.get<any>(SURVEY_URL)
     .pipe(
      retry(3),
      catchError(this.handleError)
     );
   }

   private handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
       console.error('An error occured:', error.error.message);
     } else {
       console.error(
         'Backend returned code ${error.status}, ' +
         'body was: ${error.error}');
     }
     return throwError(
       'The request cannot be fulfilled. Please try again later.'
     )
   }
}
