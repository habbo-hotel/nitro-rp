import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HotelClosedAndOpensMessageParser } from '../../parser';
export declare class HotelClosedAndOpensEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HotelClosedAndOpensMessageParser;
}
