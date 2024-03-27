import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionPartnerIsTypingMessageParser implements IMessageParser {
    private _isTyping;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isTyping(): boolean;
}
