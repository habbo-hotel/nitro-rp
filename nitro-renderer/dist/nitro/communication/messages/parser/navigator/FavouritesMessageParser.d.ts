import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class FavouritesMessageParser implements IMessageParser {
    private _limit;
    private _favouriteRoomIds;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get limit(): number;
    get favoriteRoomIds(): number[];
}
