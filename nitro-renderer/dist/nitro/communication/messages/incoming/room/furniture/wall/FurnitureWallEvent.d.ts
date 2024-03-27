import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { FurnitureWallParser } from '../../../../parser';
export declare class FurnitureWallEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureWallParser;
}
