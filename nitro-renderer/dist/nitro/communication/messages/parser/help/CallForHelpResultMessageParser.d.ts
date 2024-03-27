import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CallForHelpResultMessageParser implements IMessageParser {
    private _resultType;
    private _messageText;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get resultType(): number;
    get messageText(): string;
}
