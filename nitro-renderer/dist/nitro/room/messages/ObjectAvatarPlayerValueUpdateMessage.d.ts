import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarPlayerValueUpdateMessage extends ObjectStateUpdateMessage {
    private _value;
    constructor(value: number);
    get value(): number;
}
