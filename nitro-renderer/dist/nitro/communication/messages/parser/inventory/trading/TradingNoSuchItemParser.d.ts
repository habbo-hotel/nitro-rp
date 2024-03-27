import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingNoSuchItemParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
