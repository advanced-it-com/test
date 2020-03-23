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
  formScore = 0;
  messageCorona: string;

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

   calculateScore(suggestionScore) {
      this.formScore += suggestionScore;
   }

    getFormResults() {
      if (this.formScore >= 4 && this.formScore <= 9) {
          this.messageCorona = 'Cas suspect, veuillez appeler le 190';
      } else {
          this.messageCorona = 'Vous êtes à priori non infecté. Pour être sûr, vous pouvez entrer en contact avec un médecin';
      }
    }
}
