import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class UserCurrencyParser implements IMessageParser {
    private _currencies;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get currencies(): Map<number, number>;
}
