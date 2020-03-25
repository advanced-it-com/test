import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsFormComponent } from './components/symptoms-form/symptoms-form.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from  './components/doctor/doctor.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {ContactDoctorComponent} from './components/contact-doctor/contact-doctor.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomeComponent},
  {path: 'formulaire-symptômes', component: SymptomsFormComponent},
  {path: 'médecin', component: DoctorComponent},
  {path: 'se-connecter', component: SignInComponent},
  {path: 'contacter-un-médecin', component: ContactDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
