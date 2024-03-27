import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class ClientPingParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
