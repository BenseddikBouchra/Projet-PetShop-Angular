import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pets } from '../Beans/petsBean';
import { latestPet } from '../Beans/latestpet';
import { specialpet } from '../Beans/specialpet';
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
  mostPopularChien(): Observable<pets> {
    return this.http.get<pets>(
      'http://localhost:8080/Petshop/api/achatpet/most-popular-pet-chien'
    );
  }

  countChats(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/pet/get-count-cats'
    );
  }
  countChiens(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/pet/get-count-dogs'
    );
  }
  latestChats(): Observable<latestPet[]> {
    return this.http.get<latestPet[]>(
      'http://localhost:8080/Petshop/api/pet/get-threelatest-cats'
    );
  }
  latestChiens(): Observable<latestPet[]> {
    return this.http.get<latestPet[]>(
      'http://localhost:8080/Petshop/api/pet/get-threelatest-dogs'
    );
  }
  specialChats(): Observable<specialpet[]> {
    return this.http.get<specialpet[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-special-cats'
    );
  }
  specialChiens(): Observable<specialpet[]> {
    return this.http.get<specialpet[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-special-dogs'
    );
  }
  AllChiens(): Observable<specialpet[]> {
    return this.http.get<specialpet[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-dogs'
    );
  }
  AllChats(): Observable<specialpet[]> {
    return this.http.get<specialpet[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-cats'
    );
  }
}
