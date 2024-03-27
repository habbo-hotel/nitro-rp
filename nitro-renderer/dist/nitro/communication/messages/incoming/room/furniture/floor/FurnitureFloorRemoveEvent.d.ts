import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FurnitureFloorRemoveParser } from '../../../../parser';
export declare class FurnitureFloorRemoveEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureFloorRemoveParser;
}
