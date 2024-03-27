import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectStateChangedEvent extends RoomObjectEvent {
    static STATE_CHANGE: string;
    static STATE_RANDOM: string;
    private _state;
    constructor(type: string, object: IRoomObject, state?: number);
    get state(): number;
}
