import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { PetRemovedFromInventoryParser } from '../../../parser';
export declare class PetRemovedFromInventory extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PetRemovedFromInventoryParser;
}
