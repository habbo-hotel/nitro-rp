import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CatalogPageMessageOfferData } from './CatalogPageMessageOfferData';
import { ClubGiftData } from './ClubGiftData';
export declare class ClubGiftInfoParser implements IMessageParser {
    private _daysUntilNextGift;
    private _giftsAvailable;
    private _offers;
    private _giftData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offers(): CatalogPageMessageOfferData[];
    get daysUntilNextGift(): number;
    get giftsAvailable(): number;
    set giftsAvailable(gifts: number);
    getOfferExtraData(offerId: number): ClubGiftData;
    get giftData(): Map<number, ClubGiftData>;
}
