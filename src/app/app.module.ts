import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymptomsFormComponent } from './components/symptoms-form/symptoms-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import {FormsModule} from '@angular/forms';
import { ContactDoctorComponent } from './components/contact-doctor/contact-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomsFormComponent,
    HomeComponent,
    DoctorComponent,
    ContactDoctorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
