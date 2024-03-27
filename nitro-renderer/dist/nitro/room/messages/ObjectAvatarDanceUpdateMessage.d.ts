import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarDanceUpdateMessage extends ObjectStateUpdateMessage {
    private _danceStyle;
    constructor(danceStyle?: number);
    get danceStyle(): number;
}
