import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { log } from 'util';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

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

  createEvent(value){
    //return this.db.collection('events').add({eventType: value.eventType, type: value.type, notes: value.notes, date: value.date});
    log(value.getObjects())
    return this.db.collection('events').add(value.getObjects())
  }
}