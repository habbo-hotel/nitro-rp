import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetInfoParser } from '../../../parser';
export declare class PetInfoEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetInfoParser;
}
