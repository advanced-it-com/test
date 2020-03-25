import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PatientService} from '../../services/patient.service';
import {PatientModel} from '../../models/patient.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  inProgressPatients$: Observable<PatientModel[]>;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.inProgressPatients$ = this.patientService.getInProgressPatients();
  }

}
