import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetInventoryParser } from '../../../parser';
export declare class PetInventoryEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetInventoryParser;
}
