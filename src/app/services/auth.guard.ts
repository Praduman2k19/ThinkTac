import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EmployeeService } from './employee.service';

import { AuthService } from './auth.service';
import { of, Observable } from 'rxjs'
import { switchMap, map, take, tap } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: EmployeeService, private router: Router, public authService: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
    )
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
  //   console.log(localStorage.getItem('auth_token'));

  //   if (localStorage.getItem('auth_token') != null) {
  //     console.log('/');

  //     this.router.navigate(['/']);
  //     return true;
  //   }
  //   else {
  //     console.log('/login');
  //     this.router.navigate(['/login']);
  //     return false
  //   }
  // }
  
}
