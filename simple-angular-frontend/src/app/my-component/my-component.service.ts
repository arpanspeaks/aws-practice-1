import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyComponentService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<string> {
    return this.http.get('http://ec2-107-23-150-231.compute-1.amazonaws.com:8081/api/get_people', { responseType: 'text' });
  }

  addPeople(requestBody: object): Observable<string> {
    return this.http.post('http://ec2-107-23-150-231.compute-1.amazonaws.com:8081/api/add_person', requestBody, { responseType: 'text' });
  }

}
