import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class QuestionFinishedParser implements IMessageParser {
    private _questionId;
    private _answerCounts;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get questionId(): number;
    get answerCounts(): Map<string, number>;
}
