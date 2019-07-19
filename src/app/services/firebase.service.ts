import { AuthService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { log } from 'util';
import { objAndSameType } from '@ngx-formly/core/lib/utils';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore, public authService: AuthService) {}

  getEvents(){
    return this.db.collection('events').snapshotChanges();
  }

  getEvent(eventID){
      return this.db.collection('events').doc(eventID).snapshotChanges();
  }

  updateEvent(eventID, value){
    return this.db.collection('events').doc(eventID).set(value);
  }

  deleteEvent(eventID){
    return this.db.collection('events').doc(eventID).delete();
  }

  searchEvents(searchValue){
    log(searchValue);
    return this.db.collection('events',ref => ref.where('eventType', '==', searchValue))
      .snapshotChanges()
  }

  getEventsByUser(userID){
    return this.db.collection('events', ref => ref.where('userID', '==', userID)).snapshotChanges()
  }

  createEvent(value){
    let user = this.authService.user;
    let obj = value.getObjects();
    obj.userID = user.uid;
    return this.db.collection('events').add(obj)
  }
}