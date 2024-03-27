import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class InfoFeedEnableMessageParser implements IMessageParser {
    private _enabled;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get enabled(): boolean;
}
