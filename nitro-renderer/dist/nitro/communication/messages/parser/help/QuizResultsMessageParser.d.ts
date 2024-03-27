import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class QuizResultsMessageParser implements IMessageParser {
    private _quizCode;
    private _questionIdsForWrongAnswers;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get quizCode(): string;
    get questionIdsForWrongAnswers(): number[];
}
