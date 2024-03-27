import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarPetGestureUpdateMessage extends ObjectStateUpdateMessage {
    private _gesture;
    constructor(gesture: string);
    get gesture(): string;
}
