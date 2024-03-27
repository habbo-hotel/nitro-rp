import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarChatUpdateMessage extends ObjectStateUpdateMessage {
    private _numberOfWords;
    constructor(numberOfWords?: number);
    get numberOfWords(): number;
}
