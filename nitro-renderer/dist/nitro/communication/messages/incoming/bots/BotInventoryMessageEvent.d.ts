import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BotInventoryMessageParser } from '../../parser';
export declare class BotInventoryMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotInventoryMessageParser;
}
