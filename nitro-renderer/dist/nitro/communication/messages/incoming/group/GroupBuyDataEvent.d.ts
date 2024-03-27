import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupBuyDataParser } from '../../parser';
export declare class GroupBuyDataEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupBuyDataParser;
}
