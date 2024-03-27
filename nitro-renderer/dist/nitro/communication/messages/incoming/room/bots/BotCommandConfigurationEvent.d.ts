import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { BotCommandConfigurationParser } from '../../../parser';
export declare class BotCommandConfigurationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BotCommandConfigurationParser;
}
