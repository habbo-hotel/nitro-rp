import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PurchaseOKMessageOfferData } from './PurchaseOKMessageOfferData';
export declare class PurchaseOKMessageParser implements IMessageParser {
    private _offer;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offer(): PurchaseOKMessageOfferData;
}
