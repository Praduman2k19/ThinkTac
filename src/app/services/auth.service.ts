import { Injectable, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import 'firebase/auth';
import { from } from 'rxjs';
import { EmployeeService } from './employee.service';
import { of, Observable } from 'rxjs'
import { switchMap, map, take, tap } from 'rxjs/operators'

import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any
  user$ :any
  constructor(private fireAuth: AngularFireAuth, private router: Router, private service: EmployeeService,
    private firestore: AngularFirestore) { 
    this.fireAuth.authState.subscribe((user: any) => {
      this.user = user;
    });
    this.user$ = this.fireAuth.authState.pipe(
      switchMap((user:any) => {
        if (user) {
          return this.firestore.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  ngOnInit(): void {
    let auth_token = localStorage.getItem('auth_token')
    if (auth_token != null){
      this.router.navigate(['/']);
    }
  }

  signup(email: string, password: string, name: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
        console.log(res)
        res.user?.updateProfile({
          displayName: name,
        }).then(() => {
          resolve(res.user);
          console.log(res.user);
          var id = res?.user?.uid ? res?.user?.uid : "";
          localStorage.setItem('auth_token', id)
        })
      }, err => {
        reject(err);
        console.log(err)
      })
    })
  }


  // login 
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        console.log(res?.user?.uid);
        var id = res?.user?.uid ? res?.user?.uid : "";
        localStorage.setItem('auth_token', id)
        resolve(res.user)
        
      }, err => {
        reject(err)
        console.log(err);
        // this.message="";
        // this.userError=err;
        // if(err?.message=="There is no user record corresponding to this identifier. The user may have been deleted.")
        //   this.toastrService.warning("This email id is is not registered.")
        // else if(err?.message=="The password is invalid or the user does not have a password.")
        //   this.toastrService.error("Your password is wrong.")
        // else if(err?.message=="Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.")
        //   this.toastrService.warning("Access to this account has been temporarily disabled due to many failed login attempts. You can try again later.")
        // else
        // this.toastrService.error(err?.message)
      })
    })
  }


  // logout---------------

  signOut() {
    this.fireAuth.auth.signOut().then(res => {
      return this.fireAuth.auth.signOut().then(() => {
        let id = localStorage.getItem('auth_token')
            localStorage.removeItem('auth_token');
            this.router.navigate(['/login'])
      });
    })
  }
}