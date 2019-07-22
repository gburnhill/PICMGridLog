import { Router, ActivatedRoute} from '@angular/router';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { FormGroup, NgModel} from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Intubation } from '../models/intubation';
import { log } from 'util';

@Component({
    selector: 'modify-intubation',
    templateUrl: './modify-intubation.component.html',
    styleUrls: ['./modify-intubation.component.css']
})

export class ModifyIntubationComponent implements OnInit {
  item: any;
  new: boolean;
  model: Intubation;
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [{
    key: 'type',
    type: 'select',
    templateOptions: {
      label: 'Select Intubation Type',
      options: [
        {label: 'Oral', value: 'oral'},
        {label: 'Nasal', value: 'nasal'}
      ],
      templateOptions: {
        required: true
      }
    }
  },{
    key: 'success',
    type: 'checkbox',
    templateOptions: {
      label: 'Successful?',
      required: true
    }
  },{
    key: 'supervision',
    type: 'select',
    templateOptions: {
      options: [
        {label: 'Observed', value: 'observed'},
        {label: 'Performed Under Supervision', value: 'supervised'},
        {label: 'Performed Independently', value: 'unsupervised'},
        {label: 'Taught Colleague', value: 'taught'}
      ]
    }
  },{
    key: 'setting',
    type: 'input',
    templateOptions: {
      label: 'Setting',
      placeholder: 'PICU',
      description: 'Where performed?'
    }
  },{
    key: 'grade',
    type: 'input',
    templateOptions: {
      label: 'Grade',
      description: 'Airway Grade',
      type: 'number',
      min: 1,
      max: 5
    }
  },{
    key: 'aids',
    type: 'input',
    templateOptions: {
      label: 'Aids',
      description: 'Any aids required?',
    }
  },{
    key: 'notes',
    type: 'input',
    templateOptions: {
      label: 'Notes',
      rows: 3
    }
  }];
  constructor(private route: ActivatedRoute,
    private fbs: FirebaseService,
    private router: Router){}

    ngOnInit() {
      this.route.data.subscribe(routeData => {
        let data = routeData['data'];
        log(data);
        if (data) {
          this.item = data.payload.data();
          this.item.id = data.payload.id;
          this.model = this.item as Intubation;
          this.new = false;
        } else {
          this.model = new Intubation(1, "oral", new Date(), true);
          this.new = true;
        }
      });
    }

  save(model){
    this.fbs.updateEvent(this.item.id, this.model).then(res => {
      log('Completed');
    });
  }

  delete(){
    this.fbs.deleteEvent(this.item.id).then(res => {log('deleted')});
  }
//model = new Intubation(1, 'oral', new Date(), true, 'ward', 'unsupervised', 'ward', 2, 'bougie', 'very difficult');
  }