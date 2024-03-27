import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UserCreditsMessageParser implements IMessageParser {
    private _balance;
    parse(wrapper: IMessageDataWrapper): boolean;
    flush(): boolean;
    get balance(): number;
}
