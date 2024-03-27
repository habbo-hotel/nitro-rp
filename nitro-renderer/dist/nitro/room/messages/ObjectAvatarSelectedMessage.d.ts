import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarSelectedMessage extends ObjectStateUpdateMessage {
    private _selected;
    constructor(selected: boolean);
    get selected(): boolean;
}
