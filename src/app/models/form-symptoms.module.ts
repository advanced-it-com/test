export class FormSymptomsModule {
    id: number;
    text: string;
    score: number;
    responseDTOS: SuggestionsModule[];
}

export class SuggestionsModule {
    id: number;
    text: string;
    score: number;
}
