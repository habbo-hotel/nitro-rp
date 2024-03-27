import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionFriendRequestEvent extends RoomSessionEvent {
    static RSFRE_FRIEND_REQUEST: string;
    private _requestId;
    private _userId;
    private _userName;
    constructor(session: IRoomSession, requestId: number, userId: number, userName: string);
    get requestId(): number;
    get userId(): number;
    get userName(): string;
}
