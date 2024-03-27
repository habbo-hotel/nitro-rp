import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectVisibilityUpdateMessage extends RoomObjectUpdateMessage {
    static ENABLED: string;
    static DISABLED: string;
    private _type;
    constructor(type: string);
    get type(): string;
}
