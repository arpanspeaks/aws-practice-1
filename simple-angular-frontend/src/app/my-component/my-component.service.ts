import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyComponentService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get('http://localhost:8081/message', { responseType: 'text' });
  }

  postMessage(firstName: string, lastName: string): Observable<string> {
    var requestBody = {
      firstName: firstName,
      lastName: lastName
    };
    return this.http.post('http://localhost:8081/message', requestBody, {responseType: 'text'});
  }

}
