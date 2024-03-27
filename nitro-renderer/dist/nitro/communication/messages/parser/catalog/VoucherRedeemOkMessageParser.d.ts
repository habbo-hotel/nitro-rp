import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class VoucherRedeemOkMessageParser implements IMessageParser {
    private _productName;
    private _productDescription;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get productName(): string;
    get productDescription(): string;
}
