import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class PurchaseErrorMessageParser implements IMessageParser {
    private _code;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get code(): number;
}
