import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingYouAreNotAllowedParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
