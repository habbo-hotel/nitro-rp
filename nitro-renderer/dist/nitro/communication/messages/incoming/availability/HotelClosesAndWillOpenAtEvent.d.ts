import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HotelClosesAndWillOpenAtMessageParser } from '../../parser';
export declare class HotelClosesAndWillOpenAtEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HotelClosesAndWillOpenAtMessageParser;
}
