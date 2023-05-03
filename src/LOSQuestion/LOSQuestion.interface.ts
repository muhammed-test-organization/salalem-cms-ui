export interface IEnumAnswer {
    index: number; text: string; isCorrect?: boolean;
}

export interface IEnumAnswers extends Array<IEnumAnswer>{}

export interface IEnumLOS {
    index: number; title: string;  description: string; label: string;
}

export interface IEnumLOSs extends Array<IEnumLOS>{}

export interface ILOSQuestion {
    questionPrefix: string;
    question: string;
    extraData: string;
    answers: IEnumAnswers;
    LOS: IEnumLOSs;
    LOSLabel: string;
    difficultyIcon: 'easy' | 'medium' | 'hard';
    difficultyLabel: string;
    onEditClick?: () => void;
    onDeleteClick?: () => void;
    className?: string;
}
