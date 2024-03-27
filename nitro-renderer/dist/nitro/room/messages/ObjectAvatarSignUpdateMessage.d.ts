import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarSignUpdateMessage extends ObjectStateUpdateMessage {
    private _signType;
    constructor(signType?: number);
    get signType(): number;
}
