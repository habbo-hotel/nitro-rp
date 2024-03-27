import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectRoomPlanePropertyUpdateMessage extends RoomObjectUpdateMessage {
    static WALL_THICKNESS: string;
    static FLOOR_THICKNESS: string;
    private _type;
    private _value;
    constructor(type: string, value: number);
    get type(): string;
    get value(): number;
}
