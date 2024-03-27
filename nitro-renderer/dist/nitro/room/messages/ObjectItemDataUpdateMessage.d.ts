import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectItemDataUpdateMessage extends RoomObjectUpdateMessage {
    private _data;
    constructor(data: string);
    get data(): string;
}
