import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingNotOpenParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
