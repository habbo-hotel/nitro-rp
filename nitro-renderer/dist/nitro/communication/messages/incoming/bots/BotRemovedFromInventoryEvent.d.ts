import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BotRemovedFromInventoryParser } from '../../parser';
export declare class BotRemovedFromInventoryEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotRemovedFromInventoryParser;
}
