import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HotelWillCloseInMinutesMessageParser } from '../../parser';
export declare class HotelWillCloseInMinutesEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HotelWillCloseInMinutesMessageParser;
}
