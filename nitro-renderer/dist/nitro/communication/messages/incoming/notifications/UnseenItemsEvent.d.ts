import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UnseenItemsParser } from '../../parser';
export declare class UnseenItemsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UnseenItemsParser;
}
