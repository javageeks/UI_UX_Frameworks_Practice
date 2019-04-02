import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedback:Feedback;
  constructor(private http:HttpClient, private processHTTPMsgService: ProcessHTTPMsgService ) { }

  submitFeedback(feedback:Feedback):Observable<Feedback> {
    console.log(feedback)
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));;
  }

}
