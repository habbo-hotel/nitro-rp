import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { IssueMessageData } from './IssueMessageData';
export declare class IssuePickFailedMessageParser implements IMessageParser {
    private _issues;
    private _retryEnabled;
    private _retryCount;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
    get issues(): IssueMessageData[];
    get retryEnabled(): boolean;
    get retryCount(): number;
}
