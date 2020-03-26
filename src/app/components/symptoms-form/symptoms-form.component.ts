import { Component, OnInit } from '@angular/core';
import {SymptomsFormService} from '../../services/symptoms-form.service';
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
  currentQuestionIndex = 0;
  showedQuestions: FormSymptomsModule[] = [];
  questionsNum = 0;
  errorMessage: string;

  constructor(private symptomsformService: SymptomsFormService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
      this.symptomsformService.getQuestions().subscribe(
        data => {
          this.questions = data;
          this.showedQuestions.push(this.questions[0]);
          this.questionsNum = this.questions.length;
        },
          error => {
            this.errorMessage = 'نعتذر منك ! هناك خلل تقني، نحن نعمل على إصلاحه';
          }
      );
  }

  isNext() {
   return !(this.currentQuestionIndex === (this.questionsNum - 1));
  }
  next() {
    if (this.isNext()) {
      this.showedQuestions.pop();
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
      this.showedQuestions.push(this.questions[this.currentQuestionIndex]);
    } else {
        this.getFormResults();
    }
  }

   calculateScore(suggestionScore, questionScore) {
      this.formScore += suggestionScore * questionScore;
   }

   getFormResults() {
     if (this.formScore >= 4 && this.formScore <= 9) {
         this.messageCorona = 'Cas suspect, veuillez appeler le 190';
     } else {
         this.messageCorona = 'Vous êtes à priori non infecté. Pour être sûr, vous pouvez entrer en contact avec un médecin';
     }
   }
}
