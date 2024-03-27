import { IRoomSession } from '../../api';
import { RoomSessionEvent } from './RoomSessionEvent';
export declare class RoomSessionPropertyUpdateEvent extends RoomSessionEvent {
    static RSDUE_ALLOW_PETS: string;
    constructor(k: string, _arg_2: IRoomSession);
}
