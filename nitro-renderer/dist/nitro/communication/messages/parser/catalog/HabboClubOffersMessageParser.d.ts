import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ClubOfferData } from './ClubOfferData';
export declare class HabboClubOffersMessageParser implements IMessageParser {
    private _offers;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offers(): ClubOfferData[];
}
