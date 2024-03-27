import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FurnitureWallRemoveParser } from '../../../../parser';
export declare class FurnitureWallRemoveEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureWallRemoveParser;
}
