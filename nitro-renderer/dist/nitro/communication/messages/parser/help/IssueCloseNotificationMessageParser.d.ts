import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class IssueCloseNotificationMessageParser implements IMessageParser {
    private _closeReason;
    private _messageText;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get closeReason(): number;
    get messageText(): string;
}
