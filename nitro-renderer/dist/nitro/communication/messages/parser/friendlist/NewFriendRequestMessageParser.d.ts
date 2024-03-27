import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { FriendRequestData } from './FriendRequestData';
export declare class NewFriendRequestParser implements IMessageParser {
    private _request;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get request(): FriendRequestData;
}
