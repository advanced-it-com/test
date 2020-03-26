import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormSymptomsModule} from '../models/form-symptoms.module';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SymptomsFormService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<FormSymptomsModule[]>  {
    return this.http.get<FormSymptomsModule[]> (environment.apiBaseUrl + '/questions/all');
  }
}
