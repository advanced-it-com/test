import { Component, OnInit } from '@angular/core';
import {SymptomsformService} from '../../services/symptomsform.service';
import {FormSymptomsModule} from '../../models/form-symptoms.module';

@Component({
  selector: 'app-symptoms-form',
  templateUrl: './symptoms-form.component.html',
  styleUrls: ['./symptoms-form.component.scss']
})
export class SymptomsFormComponent implements OnInit {
  questions: FormSymptomsModule[];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private symptomsformService: SymptomsformService) { }

  ngOnInit() {
    this.getQuestions();
  }

   getQuestions() {
    this.symptomsformService.getQuestions().subscribe(
        data => {
          this.questions = data;
        }
    );
  }
}
