import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarGuideStatusUpdateMessage extends ObjectStateUpdateMessage {
    private _guideStatus;
    constructor(value: number);
    get guideStatus(): number;
}
