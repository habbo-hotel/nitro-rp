import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { FriendRequestData } from './FriendRequestData';
export declare class FriendRequestsParser implements IMessageParser {
    private _totalRequests;
    private _requests;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get totalRequests(): number;
    get requests(): FriendRequestData[];
}
