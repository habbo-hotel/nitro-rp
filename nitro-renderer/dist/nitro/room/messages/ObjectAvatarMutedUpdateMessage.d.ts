import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarMutedUpdateMessage extends ObjectStateUpdateMessage {
    private _isMuted;
    constructor(isMuted?: boolean);
    get isMuted(): boolean;
}
