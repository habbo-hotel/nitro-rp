import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { ItemDataUpdateMessageParser } from '../../../parser';
export declare class ItemDataUpdateMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ItemDataUpdateMessageParser;
}
