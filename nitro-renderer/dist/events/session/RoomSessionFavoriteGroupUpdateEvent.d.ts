import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionFavoriteGroupUpdateEvent extends RoomSessionEvent {
    static FAVOURITE_GROUP_UPDATE: string;
    private _roomIndex;
    private _habboGroupId;
    private _habboGroupName;
    private _status;
    constructor(session: IRoomSession, roomIndex: number, groupId: number, status: number, groupName: string);
    get roomIndex(): number;
    get habboGroupId(): number;
    get habboGroupName(): string;
    get status(): number;
}
