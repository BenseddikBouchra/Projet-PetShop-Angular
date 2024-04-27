import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pets } from '../Beans/petsBean';
@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private http: HttpClient) {}

  mostPopularChat(): Observable<pets> {
    return this.http.get<pets>(
      'http://localhost:8080/Petshop/api/achatpet/most-popular-pet-chat'
    );
  }

}
