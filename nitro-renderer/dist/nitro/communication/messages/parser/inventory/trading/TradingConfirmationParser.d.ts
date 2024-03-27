import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class TradingConfirmationParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
