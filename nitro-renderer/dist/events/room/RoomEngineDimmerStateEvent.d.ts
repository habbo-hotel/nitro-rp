import { RoomEngineEvent } from './RoomEngineEvent';
export declare class RoomEngineDimmerStateEvent extends RoomEngineEvent {
    static ROOM_COLOR: string;
    private _state;
    private _presetId;
    private _effectId;
    private _color;
    private _brightness;
    constructor(k: number, state: number, presetId: number, effectId: number, color: number, brightness: number);
    get state(): number;
    get presetId(): number;
    get effectId(): number;
    get color(): number;
    get brightness(): number;
}
