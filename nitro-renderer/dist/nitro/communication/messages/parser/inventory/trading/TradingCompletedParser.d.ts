import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingCompletedParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
