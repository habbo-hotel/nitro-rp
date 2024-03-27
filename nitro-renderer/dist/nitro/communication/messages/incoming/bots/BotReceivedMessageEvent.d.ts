import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BotReceivedMessageParser } from '../../parser';
export declare class BotReceivedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotReceivedMessageParser;
}
