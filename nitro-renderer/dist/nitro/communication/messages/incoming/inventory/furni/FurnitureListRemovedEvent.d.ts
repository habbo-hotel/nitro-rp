import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurnitureListRemovedParser } from '../../../parser';
export declare class FurnitureListRemovedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureListRemovedParser;
}
