import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class QuestionAnsweredParser implements IMessageParser {
    private _userId;
    private _value;
    private _answerCounts;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userId(): number;
    get value(): string;
    get answerCounts(): Map<string, number>;
}
