import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NotificationDialogMessageParser implements IMessageParser {
    private _type;
    private _parameters;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): string;
    get parameters(): Map<string, string>;
}
