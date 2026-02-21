import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({//sevice avaiable in anywhere in app
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:5000'; // your backend

  constructor(private http: HttpClient) {}

  

  // Create alert
  createAlert(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/alerts`, data);
  }

  // Get all alerts
  getAlerts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/alerts`);
  }
}
