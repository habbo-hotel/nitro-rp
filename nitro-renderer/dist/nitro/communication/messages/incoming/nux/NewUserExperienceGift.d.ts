import { IMessageDataWrapper } from '../../../../../api';
import { ProductOffer } from './ProductOffer';
export declare class NewUserExperienceGift {
    private _thumbnailUrl;
    private _productOfferList;
    constructor(wrapper: IMessageDataWrapper);
    get productOfferList(): ProductOffer[];
    get thumbnailUrl(): string;
}
