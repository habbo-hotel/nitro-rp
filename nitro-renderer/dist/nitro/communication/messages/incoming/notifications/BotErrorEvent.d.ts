import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BotErrorEventParser } from '../../parser';
export declare class BotErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotErrorEventParser;
}
