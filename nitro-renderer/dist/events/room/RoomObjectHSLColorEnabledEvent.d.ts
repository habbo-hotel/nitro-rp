import { RoomEngineEvent } from './RoomEngineEvent';
export declare class RoomObjectHSLColorEnabledEvent extends RoomEngineEvent {
    static ROOM_BACKGROUND_COLOR: string;
    private _enable;
    private _hue;
    private _saturation;
    private _lightness;
    constructor(k: string, _arg_2: number, _arg_3: boolean, _arg_4: number, _arg_5: number, _arg_6: number);
    get enable(): boolean;
    get hue(): number;
    get saturation(): number;
    get lightness(): number;
}
