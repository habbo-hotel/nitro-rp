import { IMessageDataWrapper, IMessageParser, IQuestion } from '../../../../../api';
export declare class QuestionParser implements IMessageParser {
    private _pollType;
    private _pollId;
    private _questionId;
    private _duration;
    private _question;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get pollType(): string;
    get pollId(): number;
    get questionId(): number;
    get duration(): number;
    get question(): IQuestion;
}
