import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetReceivedMessageParser } from '../../../parser';
export declare class PetReceivedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetReceivedMessageParser;
}
