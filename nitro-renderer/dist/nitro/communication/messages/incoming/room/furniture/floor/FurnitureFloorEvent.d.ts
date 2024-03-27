import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FurnitureFloorParser } from '../../../../parser';
export declare class FurnitureFloorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureFloorParser;
}
