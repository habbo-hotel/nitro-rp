import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MOTDNotificationParser implements IMessageParser {
    private _messages;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get messages(): string[];
}
