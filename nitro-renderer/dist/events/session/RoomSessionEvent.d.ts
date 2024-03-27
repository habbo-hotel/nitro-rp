import { IRoomSession } from '../../api';
import { NitroEvent } from '../core';
export declare class RoomSessionEvent extends NitroEvent {
    static CREATED: string;
    static STARTED: string;
    static ENDED: string;
    static ROOM_DATA: string;
    private _session;
    private _openLandingView;
    constructor(type: string, session: IRoomSession, openLandingView?: boolean);
    get session(): IRoomSession;
    get openLandingView(): boolean;
}
