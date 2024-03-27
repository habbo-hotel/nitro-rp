import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectFloorHoleEvent extends RoomObjectEvent {
    static ADD_HOLE: string;
    static REMOVE_HOLE: string;
    constructor(k: string, _arg_2: IRoomObject);
}
