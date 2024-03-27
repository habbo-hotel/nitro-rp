import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HotelWillShutdownParser } from '../../parser';
export declare class HotelWillShutdownEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HotelWillShutdownParser;
}
