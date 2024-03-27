import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectRoomUpdateMessage extends RoomObjectUpdateMessage {
    static ROOM_WALL_UPDATE: string;
    static ROOM_FLOOR_UPDATE: string;
    static ROOM_LANDSCAPE_UPDATE: string;
    private _type;
    private _value;
    constructor(type: string, value: string);
    get type(): string;
    get value(): string;
}
