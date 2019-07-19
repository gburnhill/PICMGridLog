import { AuthService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Router, Params } from '@angular/router';
import { log } from 'util';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { ModifyIntubationComponent } from '../modify-intubation/modify-intubation.component';
import { Intubation } from '../models/intubation'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    public router: Router,
    public modalService: NgbModal,
    public authService: AuthService
  ) { }

  typesOptions = [{reference: 'Intubation', prettyName: 'Intubation'},{reference: 'TraumaCall', prettyName: 'Trauma Call'}];
  searchType = "";
  items: Array<any>;
  typeFilteredItems: Array<any>;
  thisEvent: any;

  ngOnInit() {
    this.firebaseService.getEventsByUser(this.authService.user.uid)
    .subscribe(result => {
      this.items = result;
      this.typeFilteredItems = this.items;
      console.log('All items:' + this.typeFilteredItems);
    })
  }
/*
  searchByType(){
    log('searching..');
    log(this.searchType);
    let value = this.searchType;
    this.firebaseService.searchEvents(value)
    .subscribe(result => {
      this.type_filtered_items = result;
      //this.items = this.combineLists(result, this.type_filtered_items);
      this.items = this.type_filtered_items;
    })
  }
*/

searchByType(){
  this.typeFilteredItems = this.items.filter((item) => {
    console.log('item:' + item.eventType + ' search:' + this.searchType)
    return item.eventType == this.searchType})
}

  combineLists(a, b){
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  }

  viewDetails(item){
    this.router.navigate(['/details/'+ item.payload.doc.id]);
    //modalRef.componentInstance.intubationData = this.thisEvent;
    /*this.firebaseService.getEvent(item.payload.doc.id).subscribe(result => {this.thisEvent = result;
    this.thisEvent.id = item.payload.doc.id;
    const modalRef = this.modalService.open(ModifyIntubationComponent); 
    modalRef.componentInstance.intubationData = this.thisEvent;
  });
*/
  }
}
