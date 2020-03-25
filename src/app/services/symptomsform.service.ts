import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormSymptomsModule} from '../models/form-symptoms.module';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SymptomsformService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<FormSymptomsModule[]>  {
    //const url = '../../assets/data/covid-form.json';
    //return this.http.get<FormSymptomsModule[]>(url);
    return this.http.get<FormSymptomsModule[]> (environment.apiBaseUrl + '/questions/all');

  }
}
