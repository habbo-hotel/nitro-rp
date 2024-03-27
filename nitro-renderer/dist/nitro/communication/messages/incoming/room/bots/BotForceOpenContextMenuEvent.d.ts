import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { BotForceOpenContextMenuParser } from '../../../parser';
export declare class BotForceOpenContextMenuEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotForceOpenContextMenuParser;
}
