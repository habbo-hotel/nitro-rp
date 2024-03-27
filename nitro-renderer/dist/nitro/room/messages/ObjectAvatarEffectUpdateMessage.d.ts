import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarEffectUpdateMessage extends ObjectStateUpdateMessage {
    private _effect;
    private _delayMilliseconds;
    constructor(effect: number, delayMilliseconds?: number);
    get effect(): number;
    get delayMilliseconds(): number;
}
