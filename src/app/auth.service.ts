import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
  isUserLoggedIn$ = this.isUserLoggedInSubject.asObservable();

  constructor() { 
    this.checkUserStatus();
  }

  login(userName: string, password: string): Observable<boolean> {
    console.log(userName);
    console.log(password);

    const isLoggedIn = userName === 'admin' && password === 'admin';
    localStorage.setItem('isUserLoggedIn', isLoggedIn ? 'true' : 'false');
    this.isUserLoggedInSubject.next(isLoggedIn);

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(val => { 
        console.log('Is User Authentication is successful: ' + val); 
      })
    );
  }

  logout(): void {
    localStorage.removeItem('isUserLoggedIn');
    this.isUserLoggedInSubject.next(false);
  }

  checkUserStatus() {
    const isLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    this.isUserLoggedInSubject.next(isLoggedIn);
  }
}
