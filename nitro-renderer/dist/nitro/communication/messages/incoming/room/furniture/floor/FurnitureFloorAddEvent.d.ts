import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FurnitureFloorAddParser } from '../../../../parser';
export declare class FurnitureFloorAddEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureFloorAddParser;
}
