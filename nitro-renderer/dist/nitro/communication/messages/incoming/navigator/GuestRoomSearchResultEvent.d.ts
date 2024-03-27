import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuestRoomSearchResultMessageParser } from '../../parser';
export declare class GuestRoomSearchResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuestRoomSearchResultMessageParser;
}
