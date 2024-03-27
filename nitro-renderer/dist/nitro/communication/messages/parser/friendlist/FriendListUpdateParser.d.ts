import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { FriendCategoryData } from './FriendCategoryData';
import { FriendParser } from './FriendParser';
export declare class FriendListUpdateParser implements IMessageParser {
    private _categories;
    private _removedFriendIds;
    private _addedFriends;
    private _updatedFriends;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get categories(): FriendCategoryData[];
    get removedFriendIds(): number[];
    get addedFriends(): FriendParser[];
    get updatedFriends(): FriendParser[];
}
