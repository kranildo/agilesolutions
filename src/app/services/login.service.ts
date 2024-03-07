import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigsService } from './configs.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    public router: Router,
    public configs: ConfigsService
  ) {}

  public getIsLoggedIn(): boolean {
    return this.loggedIn;
  }

  public setIsLoggedIn(loggedIn: boolean): void {
    this.loggedIn = loggedIn;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.configs.getUrl()}/login`, {
      email: username,
      password: password,
    });
  }

  checkToken(): Observable<any> {
    let token: any = '';
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem('token')) {
        token = localStorage.getItem('token');
      }
    }
    token = token.replace(/"/g, '');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.configs.getUrl()}/check-token`, { headers });
  }

  logout() {
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['/']);
  }
  register(name: string, email: string, password: string) {
    return this.http.post(`${this.configs.getUrl()}/register`, {
      name,
      email,
      password,
    });
  }
}
