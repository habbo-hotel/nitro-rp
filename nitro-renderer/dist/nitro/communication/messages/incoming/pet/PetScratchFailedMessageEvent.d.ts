import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PetScratchFailedMessageParser } from './../../parser';
export declare class PetScratchFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetScratchFailedMessageParser;
}
