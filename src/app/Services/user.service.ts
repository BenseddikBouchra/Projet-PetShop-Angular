import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(userInfos: any) {
    return this.http.post<string>(
      'http://localhost:8080/Petshop/api/user/sign-up-user',
      userInfos
    );
  }
  countUsers(): Observable<any>{
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/user/get-count-users'
    );
  }
}
