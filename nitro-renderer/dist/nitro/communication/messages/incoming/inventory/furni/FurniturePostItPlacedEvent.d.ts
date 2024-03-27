import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurniturePostItPlacedParser } from '../../../parser';
export declare class FurniturePostItPlacedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurniturePostItPlacedParser;
}
