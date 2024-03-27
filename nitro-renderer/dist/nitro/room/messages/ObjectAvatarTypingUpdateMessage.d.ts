import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarTypingUpdateMessage extends ObjectStateUpdateMessage {
    private _isTyping;
    constructor(isTyping?: boolean);
    get isTyping(): boolean;
}
