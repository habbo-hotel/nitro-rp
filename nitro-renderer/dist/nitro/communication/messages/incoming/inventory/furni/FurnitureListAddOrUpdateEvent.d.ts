import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurnitureListAddOrUpdateParser } from '../../../parser';
export declare class FurnitureListAddOrUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureListAddOrUpdateParser;
}
