import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarGestureUpdateMessage extends ObjectStateUpdateMessage {
    private _gesture;
    constructor(gesture?: number);
    get gesture(): number;
}
