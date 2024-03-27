import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FurnitureFloorUpdateParser } from '../../../../parser';
export declare class FurnitureFloorUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureFloorUpdateParser;
}
