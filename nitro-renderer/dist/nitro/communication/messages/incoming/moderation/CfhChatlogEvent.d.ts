import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CfhChatlogMessageParser } from '../../parser';
export declare class CfhChatlogEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CfhChatlogMessageParser;
}
