import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInRequestModel} from '../models/sign-in-request.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

   signIn(signInRequestModel: SignInRequestModel): Observable<any>{
    return this.http.post(environment.apiBaseUrl + '/doctors/sign-in', signInRequestModel);
   }

  isConnected(): Observable<boolean> {
    return this.http.get<boolean> (environment.apiBaseUrl + '/doctors/is-connected');
  }

}
