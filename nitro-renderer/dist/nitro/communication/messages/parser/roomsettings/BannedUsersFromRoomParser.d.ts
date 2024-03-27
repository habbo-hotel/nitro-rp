import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { BannedUserData } from './BannedUserData';
export declare class BannedUsersFromRoomParser implements IMessageParser {
    private _roomId;
    private _bannedUsers;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get bannedUsers(): BannedUserData[];
}
