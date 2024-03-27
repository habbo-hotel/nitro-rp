import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetAddedToInventoryParser } from '../../../parser';
export declare class PetAddedToInventoryEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetAddedToInventoryParser;
}
