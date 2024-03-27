import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class QuizDataMessageParser implements IMessageParser {
    private _quizCode;
    private _questionIds;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get quizCode(): string;
    get questionIds(): number[];
}
