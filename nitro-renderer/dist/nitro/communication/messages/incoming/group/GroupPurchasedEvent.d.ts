import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GroupPurchasedParser } from '../../parser';
export declare class GroupPurchasedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GroupPurchasedParser;
}
