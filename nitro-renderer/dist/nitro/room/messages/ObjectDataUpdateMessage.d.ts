import { IObjectData } from '../../../api';
import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectDataUpdateMessage extends RoomObjectUpdateMessage {
    private _state;
    private _data;
    private _extra;
    constructor(state: number, data: IObjectData, extra?: number);
    get state(): number;
    get data(): IObjectData;
    get extra(): number;
}
