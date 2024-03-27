import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class SimpleAlertMessageParser implements IMessageParser {
    private _alertMessage;
    private _titleMessage;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get alertMessage(): string;
    get titleMessage(): string;
}
