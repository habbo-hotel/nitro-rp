import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomAdPurchaseInfoEventParser } from '../../parser';
export declare class RoomAdPurchaseInfoEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomAdPurchaseInfoEventParser;
}
