import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetExperienceParser } from '../../../parser';
export declare class PetExperienceEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetExperienceParser;
}
