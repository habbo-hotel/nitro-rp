import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class CustomUserNotificationMessageParser implements IMessageParser {
    private _code;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get count(): number;
}
