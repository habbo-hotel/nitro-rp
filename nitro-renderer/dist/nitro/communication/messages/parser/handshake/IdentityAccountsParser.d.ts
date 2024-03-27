import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class IdentityAccountsParser implements IMessageParser {
    private _accounts;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get accounts(): Map<number, string>;
}
