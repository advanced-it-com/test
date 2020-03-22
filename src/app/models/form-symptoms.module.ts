export class FormSymptomsModule {
    questionId: number;
    text: string;
    suggestions: SuggestionsModule[];
}

export class SuggestionsModule {
    suggestionId: number;
    text: string;
    score: number;
}
