import { IRoomSession, IRoomUserData } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionUserDataUpdateEvent extends RoomSessionEvent {
    static USER_DATA_UPDATED: string;
    private _addedUsers;
    constructor(session: IRoomSession, addedUsers: IRoomUserData[]);
    get addedUsers(): IRoomUserData[];
}
