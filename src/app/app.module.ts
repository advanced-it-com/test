import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymptomsFormComponent } from './components/symptoms-form/symptoms-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ContactDoctorComponent } from './components/contact-doctor/contact-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {CovidHttpInterceptor} from './interceptors/covid-http-interceptor';
import { GlobalFooterComponent } from './components/global-footer/global-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomsFormComponent,
    HomeComponent,
    DoctorComponent,
    ContactDoctorComponent,
    SignInComponent,
    GlobalFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CovidHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
