import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PurchaseNotAllowedMessageParser implements IMessageParser {
    private _code;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get code(): number;
}
