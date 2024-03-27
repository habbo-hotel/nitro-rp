import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { SimpleAlertMessageParser } from '../../parser';
export declare class SimpleAlertMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): SimpleAlertMessageParser;
}
