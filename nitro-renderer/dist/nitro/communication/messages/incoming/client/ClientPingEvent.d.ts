import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ClientPingParser } from '../../parser';
export declare class ClientPingEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ClientPingParser;
}
