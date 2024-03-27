import { RoomEngineEvent } from './RoomEngineEvent';
export declare class RoomBackgroundColorEvent extends RoomEngineEvent {
    static ROOM_COLOR: string;
    private _color;
    private _brightness;
    private _bgOnly;
    constructor(roomId: number, color: number, _arg_3: number, _arg_4: boolean);
    get color(): number;
    get brightness(): number;
    get bgOnly(): boolean;
}
