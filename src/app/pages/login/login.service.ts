import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants';
import { LoginInput } from 'src/app/shared/interfaces/login/loginInput';
import { LoginResponse } from 'src/app/shared/interfaces/login/loginResponse';

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
    return (
      !!localStorage.getItem('loggedIn') &&
      localStorage.getItem('loggedIn') == 'true'
    );
  }
}
