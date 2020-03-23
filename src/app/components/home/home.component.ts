import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../services/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isConnected = false;
  constructor(private readonly doctorService: DoctorService) { }

  ngOnInit() {
    if(localStorage.getItem('accessToken') != null){
      this.doctorService.isConnected().subscribe(res => this.isConnected = res,
        (error) => this.isConnected = false);
    }
  }

  signOut() {
    localStorage.removeItem('accessToken');
    this.isConnected = false;
  }

}
