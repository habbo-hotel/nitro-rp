import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionDanceEvent extends RoomSessionEvent {
    static RSDE_DANCE: string;
    private _roomIndex;
    private _danceId;
    constructor(session: IRoomSession, roomIndex: number, danceId: number);
    get roomIndex(): number;
    get danceId(): number;
}
