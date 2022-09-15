import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  id:any
  employee:any
  constructor(private firestore: AngularFirestore,) { 
    this.id = localStorage.getItem("auth_token");
  }
  createUser(userData: any, id: string) {
    console.log(userData);
    return this.firestore.collection('users').doc(id).set(userData, { merge: true })
  }
  addEmployee(empObj:any) {
    return this.firestore.collection('users').doc(this.id).collection('employee').add(empObj)
  }
  getAllEmployee(){
    return this.firestore.collection('users').doc(this.id).collection('employee').snapshotChanges()
  }
  updateEmployee(empId:string,empObj: any) {
    return this.firestore.collection('users').doc(this.id).collection('employee').doc(empId).set(empObj,{merge:true});
  }
  deleteEmployee(empId: string) {
    return this.firestore.collection('users').doc(this.id).collection('employee').doc(empId).delete();
  }
}
