import {Observable} from 'rxjs';
import {PatientModel} from '../models/patient.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getInProgressPatients(): Observable<PatientModel[]>{
    return this.http.get<PatientModel[]>(environment.apiBaseUrl + '/patients/in-progress');
  }

}
