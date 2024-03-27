import { ObjectStateUpdateMessage } from './ObjectStateUpdateMessage';
export declare class ObjectAvatarExperienceUpdateMessage extends ObjectStateUpdateMessage {
    private _gainedExperience;
    constructor(amount: number);
    get gainedExperience(): number;
}
