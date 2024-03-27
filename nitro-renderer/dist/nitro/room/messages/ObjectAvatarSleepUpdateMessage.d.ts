import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarSleepUpdateMessage extends ObjectStateUpdateMessage {
    private _isSleeping;
    constructor(isSleeping?: boolean);
    get isSleeping(): boolean;
}
