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


export class FormModel {
    id: number;
    responses: Array<number>;
    score: number;
}
