import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { IssueMessageData } from './IssueMessageData';
export declare class IssueInfoMessageParser implements IMessageParser {
    private _issueData;
    get issueData(): IssueMessageData;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
}
