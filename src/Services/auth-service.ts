
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserLogin } from '../app/models/userLogin';
import { LoginResponse } from '../app/models/login-response';
import { JwtPayload } from '../app/models/jwt-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);

  private readonly baseUrl = 'https://localhost:7000/api/users/';

  login(model: UserLogin) {
    return this.http.post<LoginResponse>(
      this.baseUrl + 'login',
      model
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): JwtPayload | null {
    const token = this.getToken();

    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch {
      return null;
    }
  }

  getUserId(): string | null {
    return this.getUser()?.id ?? null;
  }

  getUserName(): string | null {
    return this.getUser()?.userName ?? null;
  }

  getEmail(): string | null {
    return this.getUser()?.email ?? null;
  }

  isLoggedIn(): boolean {
    const user = this.getUser();

    return !!user?.exp &&
      user.exp * 1000 > Date.now();
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
