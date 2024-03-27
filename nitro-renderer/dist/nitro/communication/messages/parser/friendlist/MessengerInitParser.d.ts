import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { FriendCategoryData } from './FriendCategoryData';
export declare class MessengerInitParser implements IMessageParser {
    private _userFriendLimit;
    private _normalFriendLimit;
    private _extendedFriendLimit;
    private _categories;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get userFriendLimit(): number;
    get normalFriendLimit(): number;
    get extendedFriendLimit(): number;
    get categories(): FriendCategoryData[];
}
