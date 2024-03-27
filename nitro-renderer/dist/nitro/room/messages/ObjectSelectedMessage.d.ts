import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectSelectedMessage extends ObjectStateUpdateMessage {
    private _selected;
    constructor(selected: boolean);
    get selected(): boolean;
}
