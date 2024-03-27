import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarFlatControlUpdateMessage extends ObjectStateUpdateMessage {
    private _level;
    constructor(level?: number);
    get level(): number;
}
