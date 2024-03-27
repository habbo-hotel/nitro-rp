import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NoOwnedRoomsAlertMessageParser } from '../../parser';
export declare class NoOwnedRoomsAlertMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NoOwnedRoomsAlertMessageParser;
}
