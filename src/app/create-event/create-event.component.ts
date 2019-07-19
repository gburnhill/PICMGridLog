import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Intubation } from '../models/intubation'
import { log } from 'util';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  constructor(
    public firebaseService: FirebaseService
  ) { }

  intubationTypes = ['oral','nasal'];

  model = new Intubation(1, this.intubationTypes[0], new Date(), true);
  
  onSubmit(value){
    log(value);
    log(JSON.stringify(this.currentEvents));
    this.firebaseService.createEvent(this.model)
    .then(
      res => {
        log('Completed');
      }
    )
  }

}
