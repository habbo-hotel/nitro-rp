import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetStatusUpdateParser } from '../../../parser';
export declare class PetStatusUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetStatusUpdateParser;
}
