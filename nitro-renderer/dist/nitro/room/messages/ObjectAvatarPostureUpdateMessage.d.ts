import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarPostureUpdateMessage extends ObjectStateUpdateMessage {
    private _postureType;
    private _parameter;
    constructor(postureType: string, parameter?: string);
    get postureType(): string;
    get parameter(): string;
}
