import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GetGuestRoomResultMessageParser } from '../../parser';
export declare class GetGuestRoomResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GetGuestRoomResultMessageParser;
}
