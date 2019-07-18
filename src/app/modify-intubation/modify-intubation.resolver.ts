import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class ModifyIntubationResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      const eventID = route.paramMap.get('id');
      this.firebaseService.getEvent(eventID)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}