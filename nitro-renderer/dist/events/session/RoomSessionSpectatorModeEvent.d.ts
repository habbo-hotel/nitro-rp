import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionSpectatorModeEvent extends RoomSessionEvent {
    static SPECTATOR_MODE: string;
    constructor(type: string, session: IRoomSession);
}
