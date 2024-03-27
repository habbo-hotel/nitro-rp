import { Vector3d } from '../../../api';
import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectTileCursorUpdateMessage extends RoomObjectUpdateMessage {
    private _height;
    private _sourceEventId;
    private _visible;
    private _toggleVisibility;
    constructor(k: Vector3d, height: number, visible: boolean, sourceEventId: string, toggleVisibility?: boolean);
    get height(): number;
    get visible(): boolean;
    get sourceEventId(): string;
    get toggleVisibility(): boolean;
}
