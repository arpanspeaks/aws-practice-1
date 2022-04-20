import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyComponentService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get('http://ec2-44-204-211-164.compute-1.amazonaws.com:8081/message', { responseType: 'text' });
  }

  postMessage(requestBody: object): Observable<string> {
    return this.http.post('http://ec2-44-204-211-164.compute-1.amazonaws.com:8081/message', requestBody, { responseType: 'text' });
  }

}
