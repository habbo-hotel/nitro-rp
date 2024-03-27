import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PetLevelUpdateMessageParser } from '../../parser';
export declare class PetLevelUpdateMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetLevelUpdateMessageParser;
}
