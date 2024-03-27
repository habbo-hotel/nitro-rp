import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FurnitureWallUpdateParser } from '../../../../parser';
export declare class FurnitureWallUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureWallUpdateParser;
}
