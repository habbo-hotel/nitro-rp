import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectRoomColorUpdateMessage extends RoomObjectUpdateMessage {
    static BACKGROUND_COLOR: string;
    private _type;
    private _color;
    private _light;
    private _backgroundOnly;
    constructor(type: string, color: number, light: number, backgroundOnly: boolean);
    get type(): string;
    get color(): number;
    get light(): number;
    get backgroundOnly(): boolean;
}
