import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
