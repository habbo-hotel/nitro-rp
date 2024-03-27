import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectRoomFloorHoleUpdateMessage extends RoomObjectUpdateMessage {
    static ADD: string;
    static REMOVE: string;
    private _type;
    private _id;
    private _x;
    private _y;
    private _width;
    private _height;
    constructor(type: string, id: number, x?: number, y?: number, width?: number, height?: number);
    get type(): string;
    get id(): number;
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
}
