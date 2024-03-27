import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionDoorbellEvent extends RoomSessionEvent {
    static DOORBELL: string;
    static RSDE_REJECTED: string;
    static RSDE_ACCEPTED: string;
    private _userName;
    constructor(type: string, session: IRoomSession, userName: string);
    get userName(): string;
}
