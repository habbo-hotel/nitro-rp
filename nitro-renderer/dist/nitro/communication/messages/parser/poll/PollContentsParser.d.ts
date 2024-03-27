import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PollQuestion } from './PollQuestion';
export declare class PollContentsParser implements IMessageParser {
    private _id;
    private _startMessage;
    private _endMessage;
    private _numQuestions;
    private _questionArray;
    private _npsPoll;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    private parsePollQuestion;
    get id(): number;
    get startMessage(): string;
    get endMessage(): string;
    get numQuestions(): number;
    get questionArray(): PollQuestion[];
    get npsPoll(): boolean;
}
