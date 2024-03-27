import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingOtherNotAllowedParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
