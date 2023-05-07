import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/shared/constants';
import { LoginInput, LoginResponse } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly PATH = `${BASE_URL}/auth`;
  constructor(private http: HttpClient) {}

  login(login: LoginInput): Observable<LoginResponse> {
    return this.http.put<LoginResponse>(`${this.PATH}/login`, login);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
}
