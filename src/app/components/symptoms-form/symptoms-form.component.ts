import { Component, OnInit } from '@angular/core';
import {SymptomsformService} from '../../services/symptomsform.service';
import {FormSymptomsModule} from '../../models/form-symptoms.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  constructor(private symptomsformService: SymptomsformService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
      this.symptomsformService.getQuestions().subscribe(
        data => {
          this.questions = data;
          this.showedQuestions.push(this.questions[0]);
          this.questionsNum = this.questions.length;
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
    }
  }

  isPrevious() {
    return !(this.currentQuestionIndex === 0);
  }

  previous() {
    if (this.isPrevious()) {
      this.showedQuestions.pop();
      this.currentQuestionIndex = this.currentQuestionIndex - 1;
      this.showedQuestions.push(this.questions[this.currentQuestionIndex]);
    }
  }

   calculateScore(suggestionScore, questionScore) {
      this.formScore += suggestionScore*questionScore;
      console.log(this.formScore);
   }

    getFormResults() {
      if (this.formScore >= 4 && this.formScore <= 9) {
          this.messageCorona = 'Cas suspect, veuillez appeler le 190';
      } else {
          this.messageCorona = 'Vous êtes à priori non infecté. Pour être sûr, vous pouvez entrer en contact avec un médecin';
      }
    }
}
