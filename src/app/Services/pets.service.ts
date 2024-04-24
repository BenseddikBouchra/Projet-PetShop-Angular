import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private http: HttpClient) {}

  pets(): Observable<any> {
    return this.http.get('http://localhost:8080/Petshop/api/pets');
  }
  products(): Observable<any> {
    return this.http.get('http://localhost:8080/Petshop/api/products');
  }
}
