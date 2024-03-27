import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectMoveEvent extends RoomObjectEvent {
    static POSITION_CHANGED: string;
    static OBJECT_REMOVED: string;
    constructor(k: string, _arg_2: IRoomObject);
}
