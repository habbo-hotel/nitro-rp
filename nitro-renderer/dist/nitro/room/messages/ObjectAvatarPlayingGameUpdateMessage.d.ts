import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarPlayingGameUpdateMessage extends ObjectStateUpdateMessage {
    private _isPlayingGame;
    constructor(flag: boolean);
    get isPlayingGame(): boolean;
}
