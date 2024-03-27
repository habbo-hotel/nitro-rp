import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CallForHelpDisabledNotifyMessageParser implements IMessageParser {
    private _infoUrl;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get infoUrl(): string;
}
