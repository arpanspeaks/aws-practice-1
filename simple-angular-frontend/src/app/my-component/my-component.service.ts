import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyComponentService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get('http://localhost:8081/api/get_people', { responseType: 'text' });
  }

  postMessage(requestBody: object): Observable<string> {
    return this.http.post('http://localhost:8081/api/add_person', requestBody, { responseType: 'text' });
  }

}
