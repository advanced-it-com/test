import { Component, OnInit } from '@angular/core';
import {SignInRequestModel} from '../../models/sign-in-request.model';
import {DoctorService} from '../../services/doctor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInRequestModel: SignInRequestModel = {
    userName: '',
    password: ''
  };
  displaySignInFailedMessage = false;

  constructor(private readonly doctorService: DoctorService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.displaySignInFailedMessage = false;
    this.doctorService.signIn(this.signInRequestModel).subscribe(response => {
      localStorage.setItem('accessToken', 'Bearer ' + response.accessToken);
      this.router.navigate(['médecin']);
    }, (error => this.displaySignInFailedMessage = true));
  }

}
