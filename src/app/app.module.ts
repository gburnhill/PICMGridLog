import { ModifyIntubationResolver } from './modify-intubation/modify-intubation.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModifyIntubationComponent} from './modify-intubation/modify-intubation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    HomeComponent,
    ModifyIntubationComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [FirebaseService, ModifyIntubationResolver],
  bootstrap: [AppComponent],
  entryComponents: [ModifyIntubationComponent]
})
export class AppModule { }
