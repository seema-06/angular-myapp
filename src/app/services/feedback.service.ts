import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Feedback } from '../shared/feedback';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


    /** POST: add a new hero to the database */
    submitFeedback(feedback: Feedback): Observable<Feedback> {
  const httpOptions = {
         headers: new HttpHeaders ({
           'Content-Type':  'application/json'
        })
       };
  return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions)
  .pipe(catchError(this.processHTTPMsgService.handleError));

}

  // addFeedback(feedback: Feedback): Observable<Feedback> {
  //   const httpOptions = {
  //     headers: new HttpHeaders ({
  //       'Content-Type':  'application/json'
  //     })
  //   };
  //   return this.http.post<Feedback>(baseURL + 'feedback/' , feedback, httpOptions)
  //     .pipe(catchError(this.processHTTPMsgService.handleError));

  // }
}
