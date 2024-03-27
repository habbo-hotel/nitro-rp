import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectRoomPlaneVisibilityUpdateMessage extends RoomObjectUpdateMessage {
    static WALL_VISIBILITY: string;
    static FLOOR_VISIBILITY: string;
    private _type;
    private _visible;
    constructor(type: string, visible: boolean);
    get type(): string;
    get visible(): boolean;
}
