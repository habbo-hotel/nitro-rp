import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurnitureListInvalidateParser } from '../../../parser';
export declare class FurnitureListInvalidateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurnitureListInvalidateParser;
}
