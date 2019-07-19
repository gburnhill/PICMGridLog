import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;

  constructor(public afAuth: AngularFireAuth) 
  {afAuth.authState.subscribe(user => this.user = user);}

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
          reject(err);
      })
    })
  }
  getCurrentUser(){
    return new Promise<any>((resolve,reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
        } else {
          reject ('No user logged in');
        }
      })
    })
  }
  doLogin(value){
    return new Promise<any>((resolve,reject)=> {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then( res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut();
        resolve();
      }
      else{
        reject ();
      }
    });
  }

  get isLoggedIn(): boolean {
    return this.user !== null;
  }
}
