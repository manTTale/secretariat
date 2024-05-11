import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('adminabcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Mantale Roberto Admin', email: 'admin@gmail.com' });
    }
    if (email === 'secretary@gmail.com' && password === 'secretary123') {
      this.setToken('secretaryabcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Mantale Roberto Secretary', email: 'secretary@gmail.com' });
    }
    if (email === 'student@gmail.com' && password === 'student123') {
      this.setToken('studentabcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Mantale Roberto Student', email: 'student@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  determineLoginType(): string | null {
    var token = this.getToken();
    console.log('token: ' + token);
    return token;
  }
}
