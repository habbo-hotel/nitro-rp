import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectDimmerStateUpdateEvent extends RoomObjectEvent {
    static DIMMER_STATE: string;
    private _state;
    private _presetId;
    private _effectId;
    private _color;
    private _brightness;
    constructor(object: IRoomObject, state: number, presetId: number, effectId: number, color: number, brightness: number);
    get state(): number;
    get presetId(): number;
    get effectId(): number;
    get color(): number;
    get brightness(): number;
}
