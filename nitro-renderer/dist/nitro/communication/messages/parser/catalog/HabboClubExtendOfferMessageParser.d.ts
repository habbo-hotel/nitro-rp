import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ClubOfferExtendData } from './ClubOfferExtendData';
export declare class HabboClubExtendOfferMessageParser implements IMessageParser {
    private _offer;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offer(): ClubOfferExtendData;
}
