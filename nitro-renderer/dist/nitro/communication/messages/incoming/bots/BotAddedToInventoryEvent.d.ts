import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BotAddedToInventoryParser } from '../../parser';
export declare class BotAddedToInventoryEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotAddedToInventoryParser;
}
