import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectAdUpdateMessage extends RoomObjectUpdateMessage {
    static IMAGE_LOADED: string;
    static IMAGE_LOADING_FAILED: string;
    private _type;
    constructor(type: string);
    get type(): string;
}
