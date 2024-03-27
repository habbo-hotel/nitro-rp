import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class IssueDeletedMessageParser implements IMessageParser {
    private _issueId;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
    get issueId(): number;
}
