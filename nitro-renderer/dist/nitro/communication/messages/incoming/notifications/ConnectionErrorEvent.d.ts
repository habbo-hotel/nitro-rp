import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ConnectionErrorMessageParser } from '../../parser/notifications/ConnectionErrorMessageParser';
export declare class ConnectionErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ConnectionErrorMessageParser;
}
