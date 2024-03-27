import { IMessageDataWrapper } from '../../../../../api';
import { ClubOfferData } from './ClubOfferData';
export declare class ClubOfferExtendData extends ClubOfferData {
    private _originalPrice;
    private _originalActivityPointPrice;
    private _originalActivityPointType;
    private _subscriptionDaysLeft;
    constructor(wrapper: IMessageDataWrapper);
    get originalPrice(): number;
    get originalActivityPointPrice(): number;
    get originalActivityPointType(): number;
    get discountCreditAmount(): number;
    get discountActivityPointAmount(): number;
    get subscriptionDaysLeft(): number;
}
